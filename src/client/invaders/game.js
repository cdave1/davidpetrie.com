// The rules of the masthead game. A formation marches side to side and steps down; a rover along
// the bottom shoots back on its own until it runs out of lives or the formation lands. Everything
// is measured in dots, the game's pixels; the page decides how big a dot is on screen. Nothing
// here touches the page, so the game also runs without one.

import { sprites, bunkerCells } from './sprites.js';

export const TICK = 1 / 60; // seconds per update

const CELL_W = 15; // formation column pitch
const CELL_H = 13; // formation row pitch
const UNIT_W = 11; // the widest unit
const EDGE = 2; // dots kept clear at each side
const DROP = 6; // how far the formation steps down at an edge
const SHOT_SPEED = 210; // dots per second
const ROVER_SPEED = 60;
const GUN = 6; // the rover's barrel, from its left edge
const LIVES = 3;
const POINTS = { eye: 30, jelly: 20, moth: 10 };
const BONUS_POINTS = [50, 100, 150, 300];

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const overlap = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

export class Game {
    // width, height: the field in dots. top: dots left clear above the field for the score.
    constructor({ width, height, top = 0, hi = 0, random = Math.random }) {
        this.w = width;
        this.h = height;
        this.top = top;
        this.hi = hi;
        this.random = random;
        this.score = 0;
        this.lives = LIVES;
        this.wave = 1;
        this.clock = 0;
        this.events = []; // what happened since the page last looked: sounds to play
        this.effects = []; // explosions and the like, each with a time left to live

        const rover = sprites.rover[0];
        this.ground = height - 1;
        this.player = { x: this.home(), y: height - 2 - rover.h, w: rover.w, h: rover.h, frame: 0, roll: 0, alive: true };
        this.bunkerY = this.player.y - 6 - bunkerCells().h;
        this.ai = { timer: 0, goal: this.player.x, cooldown: 0 };
        this.startWave();
    }

    home() {
        return Math.round((this.w - sprites.rover[0].w) / 2);
    }

    emit(type, value) {
        this.events.push({ type, value });
    }

    setPhase(phase) {
        this.phase = phase;
        this.phaseTime = 0;
    }

    speed() {
        return 1 + 0.15 * (this.wave - 1);
    }

    // ---------- setting up ----------

    startWave() {
        const rows = this.h >= 170 ? 5 : 4;
        const types = rows === 5 ? ['eye', 'jelly', 'jelly', 'moth', 'moth'] : ['eye', 'jelly', 'moth', 'moth'];
        const cols = clamp(Math.floor((this.w * 0.62) / CELL_W), 4, 11);
        const left = Math.round((this.w - cols * CELL_W) / 2);
        // Each wave starts a step lower than the last, but never right on top of the bunkers.
        const top = Math.min(this.top + 12 + Math.min(this.wave - 1, 6) * DROP, this.bunkerY - 2 * DROP - rows * CELL_H);

        this.invaders = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const type = types[row];
                const { w, h } = sprites[type][0];
                const x = left + col * CELL_W + Math.floor((UNIT_W - w) / 2);
                this.invaders.push({ type, row, col, x, y: top + row * CELL_H, w, h, alive: true, shown: false });
            }
        }
        // They appear one at a time, from the bottom row up.
        this.arrivals = [...this.invaders].sort((a, b) => b.row - a.row || a.col - b.col);
        this.total = this.alive = this.invaders.length;
        this.march = { dir: 1, timer: 0.4, frame: 0, note: 0 };

        this.bunkers = [];
        const count = clamp(Math.floor(this.w / 75), 2, 4);
        for (let i = 0; i < count; i++) {
            const shape = bunkerCells();
            this.bunkers.push({ ...shape, x: Math.round(((i + 0.5) * this.w) / count - shape.w / 2), y: this.bunkerY, version: 0 });
        }

        this.shot = null;
        this.bombs = [];
        this.bonus = null;
        this.bombTimer = 1.2;
        this.bonusTimer = 10 + this.random() * 10;
        this.setPhase('arrive');
    }

    // ---------- the clock ----------

    tick() {
        const dt = TICK;
        this.clock += dt;
        this.phaseTime += dt;
        this.effects = this.effects.filter((effect) => (effect.t -= dt) > 0);

        if (this.phase === 'arrive') {
            const shown = Math.min(this.arrivals.length, Math.floor(this.phaseTime / 0.014));
            for (let i = 0; i < shown; i++) this.arrivals[i].shown = true;
            if (shown === this.arrivals.length) this.setPhase('play');
        } else if (this.phase === 'play') {
            this.think(dt);
            this.updateShot(dt);
            if (this.phase === 'play') this.updateMarch(dt);
            if (this.phase === 'play') this.updateBombs(dt);
            if (this.phase === 'play') this.updateBonus(dt);
        } else if (this.phase === 'dying' && this.phaseTime > 1.6) {
            if (this.lives > 0) {
                Object.assign(this.player, { alive: true, x: this.home() });
                this.ai.goal = this.player.x;
                this.setPhase('play');
            } else {
                this.hi = Math.max(this.hi, this.score);
                this.setPhase('over');
                this.emit('over');
            }
        } else if (this.phase === 'cleared' && this.phaseTime > 1.6) {
            this.wave++;
            this.startWave();
        }
    }

    // ---------- the formation ----------

    stepInterval() {
        return (0.03 + 0.42 * (this.alive / this.total)) / this.speed();
    }

    stepSize() {
        return this.alive <= 2 ? 3 : 2;
    }

    updateMarch(dt) {
        const march = this.march;
        march.timer -= dt;
        if (march.timer > 0) return;
        march.timer += this.stepInterval();

        const live = this.invaders.filter((inv) => inv.alive);
        const dx = this.stepSize() * march.dir;
        const lo = Math.min(...live.map((inv) => inv.x));
        const hi = Math.max(...live.map((inv) => inv.x + inv.w));
        if (lo + dx < EDGE || hi + dx > this.w - EDGE) {
            for (const inv of live) inv.y += DROP;
            march.dir = -march.dir;
        } else {
            for (const inv of live) inv.x += dx;
        }
        march.frame ^= 1;
        march.note = (march.note + 1) % 3;
        this.emit('march', march.note);

        for (const inv of live) {
            for (const bunker of this.bunkers) if (overlap(inv, bunker)) this.erase(bunker, inv);
            if (inv.y + inv.h >= this.player.y + 2) {
                this.hitPlayer(true);
                return;
            }
        }
    }

    // The lowest live unit in each column: the only ones that can shoot or be shot first.
    front() {
        const front = new Map();
        for (const inv of this.invaders) {
            if (inv.alive && (!front.has(inv.col) || inv.row > front.get(inv.col).row)) front.set(inv.col, inv);
        }
        return [...front.values()];
    }

    // How fast the formation is drifting sideways, in dots per second.
    drift() {
        return (this.stepSize() * this.march.dir) / this.stepInterval();
    }

    // ---------- bombs ----------

    bombSpeed() {
        return Math.min(60 + 8 * (this.wave - 1), 110);
    }

    updateBombs(dt) {
        this.bombTimer -= dt;
        if (this.bombTimer <= 0) {
            this.bombTimer = (0.6 + this.random() * 0.9) / this.speed();
            if (this.bombs.length < Math.min(1 + this.wave, 7)) this.dropBomb();
        }

        const speed = this.bombSpeed();
        const p = this.player;
        const target = { x: Math.round(p.x), y: p.y + 2, w: p.w, h: p.h - 2 };
        for (const bomb of [...this.bombs]) {
            bomb.y += speed * dt;
            bomb.t += dt;
            const box = { x: bomb.x, y: Math.round(bomb.y), w: 3, h: 6 };
            if (overlap(box, target)) {
                this.hitPlayer(false);
                return;
            }
            if (this.chip(box, 1) || box.y + box.h >= this.ground) {
                if (box.y + box.h >= this.ground) this.effects.push({ kind: 'pop', x: bomb.x, y: this.ground - 3, t: 0.15 });
                this.bombs.splice(this.bombs.indexOf(bomb), 1);
            }
        }
    }

    dropBomb() {
        const front = this.front();
        if (!front.length) return;
        let shooter;
        if (this.random() < 0.45) {
            // An aimed bomb, from the column nearest the rover.
            const gun = this.player.x + GUN;
            const off = (inv) => Math.abs(inv.x + inv.w / 2 - gun);
            shooter = front.reduce((best, inv) => (off(inv) < off(best) ? inv : best));
        } else {
            shooter = front[Math.floor(this.random() * front.length)];
        }
        this.bombs.push({ x: shooter.x + Math.floor(shooter.w / 2) - 1, y: shooter.y + shooter.h, t: 0 });
    }

    // ---------- the bonus headset ----------

    updateBonus(dt) {
        const bonus = this.bonus;
        if (bonus) {
            bonus.x += bonus.dir * bonus.speed * dt;
            if (bonus.x < -bonus.w || bonus.x > this.w) this.endBonus();
            return;
        }
        this.bonusTimer -= dt;
        if (this.bonusTimer <= 0 && this.alive >= 6) {
            const { w, h } = sprites.headset[0];
            const dir = this.random() < 0.5 ? 1 : -1;
            this.bonus = { x: dir > 0 ? -w : this.w, y: this.top + 2, w, h, dir, speed: 28 };
            this.bonusTimer = 14 + this.random() * 12;
            this.emit('bonus');
        }
    }

    endBonus() {
        if (!this.bonus) return;
        this.bonus = null;
        this.emit('bonusGone');
    }

    // ---------- the rover ----------

    // The rover's mind: pick somewhere to stand, drive there, shoot when lined up. It notices most
    // bombs and steps out from under them, but not all of them, and fewer as the waves go on.
    think(dt) {
        const p = this.player;
        const ai = this.ai;
        ai.timer -= dt;
        ai.cooldown -= dt;
        if (ai.timer <= 0) {
            ai.timer = 0.1 + this.random() * 0.18;
            ai.goal = this.chooseGoal();
        }
        const away = ai.goal - p.x;
        if (Math.abs(away) > 0.01) {
            const step = ROVER_SPEED * dt;
            p.x = clamp(p.x + clamp(away, -step, step), EDGE, this.w - EDGE - p.w);
            p.roll += dt;
            p.frame = Math.floor(p.roll / 0.07) % 2;
        }
        if (!this.shot && ai.cooldown <= 0 && (this.linedUp() || this.random() < 0.003)) this.fire();
    }

    fire() {
        this.shot = { x: Math.round(this.player.x) + GUN, y: this.player.y - 4 };
        this.ai.cooldown = 0.25;
        this.emit('shoot');
    }

    // Would a shot fired now hit something? Allows for the drift while the shot climbs.
    linedUp() {
        const p = this.player;
        const gun = Math.round(p.x) + GUN;
        const drift = this.drift();
        for (const inv of this.invaders) {
            if (!inv.alive) continue;
            const x = inv.x + drift * ((p.y - inv.y - inv.h) / SHOT_SPEED);
            if (gun >= x + 1 && gun <= x + inv.w - 2) return true;
        }
        const bonus = this.bonus;
        if (bonus) {
            const x = bonus.x + bonus.dir * bonus.speed * ((p.y - bonus.y - bonus.h) / SHOT_SPEED);
            if (gun >= x + 2 && gun <= x + bonus.w - 3) return true;
        }
        return false;
    }

    chooseGoal() {
        const p = this.player;
        const drift = this.drift();
        const travel = (inv) => (p.y - inv.y - inv.h) / SHOT_SPEED;

        // Aim at the unit that is cheapest to line up with, favouring the low ones.
        let desired = p.x;
        let best = Infinity;
        for (const inv of this.front()) {
            const x = inv.x + inv.w / 2 + drift * travel(inv) - GUN;
            const cost = Math.abs(x - p.x) - inv.y * 0.4;
            if (cost < best) {
                best = cost;
                desired = x;
            }
        }
        const bonus = this.bonus;
        if (bonus) {
            const x = bonus.x + bonus.w / 2 + bonus.dir * bonus.speed * (travel(bonus) + 0.3) - GUN;
            if (x > 0 && x < this.w - p.w && Math.abs(x - p.x) < 60) desired = x;
        }
        desired = clamp(Math.round(desired + (this.random() - 0.5) * 3), EDGE, this.w - EDGE - p.w);

        // Keep out from under the bombs it has noticed.
        const zones = this.dangerZones();
        const safe = (x) => zones.every(([lo, hi]) => x < lo || x > hi);
        const anchor = safe(Math.round(p.x)) ? desired : Math.round(p.x);
        for (let d = 0; d < this.w; d++) {
            for (const x of [anchor - d, anchor + d]) {
                if (x >= EDGE && x <= this.w - EDGE - p.w && safe(x)) return x;
            }
        }
        return desired;
    }

    // Stretches of ground (as the rover's left edge) that a noticed bomb will land on soon.
    dangerZones() {
        const p = this.player;
        const speed = this.bombSpeed();
        const awareness = Math.max(0.5, 0.97 - 0.07 * (this.wave - 1));
        const zones = [];
        for (const bomb of this.bombs) {
            if (bomb.seen === undefined) bomb.seen = this.random() < awareness;
            if (!bomb.seen || bomb.y > p.y + p.h) continue;
            if ((p.y - bomb.y - 6) / speed > 0.9) continue;
            zones.push([bomb.x - p.w - 1, bomb.x + 4]);
        }
        return zones;
    }

    hitPlayer(landed) {
        const p = this.player;
        p.alive = false;
        this.lives = landed ? 0 : this.lives - 1;
        this.effects.push({ kind: 'wreck', x: Math.round(p.x), y: p.y, t: 1.4 });
        this.shot = null;
        this.bombs = [];
        this.endBonus();
        this.emit('die');
        this.setPhase('dying');
    }

    // ---------- the rover's shot ----------

    updateShot(dt) {
        const shot = this.shot;
        if (!shot) return;
        shot.y -= SHOT_SPEED * dt;
        const box = { x: shot.x, y: Math.round(shot.y), w: 1, h: 4 };

        if (box.y <= this.top) {
            this.effects.push({ kind: 'pop', x: shot.x - 1, y: this.top, t: 0.15 });
            this.shot = null;
            return;
        }
        for (const bomb of this.bombs) {
            if (overlap(box, { x: bomb.x, y: Math.round(bomb.y), w: 3, h: 6 })) {
                this.bombs.splice(this.bombs.indexOf(bomb), 1);
                this.effects.push({ kind: 'pop', x: bomb.x, y: box.y, t: 0.15 });
                this.emit('clink');
                this.shot = null;
                return;
            }
        }
        for (const inv of this.invaders) {
            if (inv.alive && inv.shown && overlap(box, inv)) {
                this.kill(inv);
                return;
            }
        }
        const bonus = this.bonus;
        if (bonus && overlap(box, { x: Math.round(bonus.x), y: bonus.y, w: bonus.w, h: bonus.h })) {
            const points = BONUS_POINTS[Math.floor(this.random() * BONUS_POINTS.length)];
            this.score += points;
            this.effects.push({ kind: 'score', x: Math.round(bonus.x + bonus.w / 2), y: bonus.y, text: String(points), t: 1.2 });
            this.bonus = null;
            this.shot = null;
            this.emit('bonusHit');
            return;
        }
        if (this.chip(box, -1)) this.shot = null;
    }

    kill(inv) {
        inv.alive = false;
        this.alive--;
        this.score += POINTS[inv.type];
        this.effects.push({ kind: 'burst', x: inv.x + Math.floor((inv.w - sprites.burst[0].w) / 2), y: inv.y, t: 0.25 });
        this.shot = null;
        this.emit('hit');
        if (this.alive === 0) {
            this.bombs = [];
            this.endBonus();
            this.setPhase('cleared');
            this.emit('wave');
        }
    }

    // ---------- bunkers ----------

    // If the box touches a bunker, blow a hole where it first meets it and report true. dir is 1
    // for something falling (meets the top first) and -1 for something rising.
    chip(box, dir) {
        for (const bunker of this.bunkers) {
            if (!overlap(box, bunker)) continue;
            const x0 = Math.max(box.x, bunker.x) - bunker.x;
            const x1 = Math.min(box.x + box.w, bunker.x + bunker.w) - bunker.x;
            const y0 = Math.max(box.y, bunker.y) - bunker.y;
            const y1 = Math.min(box.y + box.h, bunker.y + bunker.h) - bunker.y;
            for (let i = 0; i < y1 - y0; i++) {
                const y = dir > 0 ? y0 + i : y1 - 1 - i;
                for (let x = x0; x < x1; x++) {
                    if (bunker.cells[y * bunker.w + x]) {
                        this.blast(bunker, x, y);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    blast(bunker, cx, cy) {
        for (let dy = -2; dy <= 2; dy++) {
            for (let dx = -2; dx <= 2; dx++) {
                const x = cx + dx;
                const y = cy + dy;
                const d = Math.abs(dx) + Math.abs(dy);
                if (x < 0 || y < 0 || x >= bunker.w || y >= bunker.h || d > 3) continue;
                if (d === 0 || this.random() < 0.6) bunker.cells[y * bunker.w + x] = 0;
            }
        }
        bunker.version++;
    }

    // A unit marching through a bunker wipes out what it covers.
    erase(bunker, box) {
        for (let y = Math.max(box.y, bunker.y); y < Math.min(box.y + box.h, bunker.y + bunker.h); y++) {
            for (let x = Math.max(box.x, bunker.x); x < Math.min(box.x + box.w, bunker.x + bunker.w); x++) {
                bunker.cells[(y - bunker.y) * bunker.w + (x - bunker.x)] = 0;
            }
        }
        bunker.version++;
    }
}
