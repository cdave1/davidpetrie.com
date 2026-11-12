// The masthead game: finds the empty part of the orange field (beside the name on wide screens,
// under it on narrow ones), draws the game and its lettering there in white and plays its sounds.
// It plays itself until the rover is out of lives, then stops on "GAME OVER". The rules are in
// game.js.
//
// Off screen it pauses. Under reduced motion it shows one still frame and makes no sound.

import { Game, TICK } from './game.js';
import { sprites } from './sprites.js';
import { typeset, LINE } from './font.js';
import { createSound } from './sound.js';

const HI_KEY = 'arcade-hi';
const HUD = 11; // dots kept clear at the top of the field for the score
const HUD_GAP = 8; // dots between the score and the high score
const OVER_SHARE = 0.72; // "GAME OVER" is three times the score's size if that fits in this much of the width, else twice
const OVER_PAD = 4; // dots kept clear around it
const START_AFTER = 1300; // ms: let the masthead's own entrance finish first

function load(key) {
    try {
        return Number(localStorage.getItem(key)) || 0;
    } catch {
        return 0;
    }
}

function save(key, value) {
    try {
        localStorage.setItem(key, String(value));
    } catch {}
}

// Each sprite frame as one path, in dots, so a frame fills in a single call with no seams.
const paths = new Map();
function pathOf(sprite) {
    let path = paths.get(sprite);
    if (!path) {
        path = new Path2D();
        for (const [x, y] of sprite.dots) path.rect(x, y, 1, 1);
        paths.set(sprite, path);
    }
    return path;
}

// A bunker's remaining dots as a path, one rectangle per run of dots in a row.
function bunkerPath(bunker) {
    const path = new Path2D();
    for (let y = 0; y < bunker.h; y++) {
        let start = -1;
        for (let x = 0; x <= bunker.w; x++) {
            const on = x < bunker.w && bunker.cells[y * bunker.w + x];
            if (on && start < 0) start = x;
            if (!on && start >= 0) {
                path.rect(start, y, x - start, 1);
                start = -1;
            }
        }
    }
    return path;
}

// The empty part of the masthead, in CSS pixels from its top left corner.
function room(masthead) {
    const name = masthead.querySelector('.masthead__name');
    const lede = masthead.querySelector('.masthead__lede');
    const bar = masthead.querySelector('.masthead__top');
    if (!name || !lede || !bar) return null;
    const gap = 24;
    const top = bar.offsetTop + bar.offsetHeight + gap;
    const bottom = lede.offsetTop - gap;
    const right = lede.offsetLeft + lede.offsetWidth;
    const besideX = name.offsetLeft + name.offsetWidth + gap * 2;
    const underY = name.offsetTop + name.offsetHeight + gap;
    const beside = { x: besideX, y: top, w: right - besideX, h: bottom - top };
    const under = { x: name.offsetLeft, y: underY, w: right - name.offsetLeft, h: bottom - underY };
    const area = (r) => (r.w > 0 && r.h > 0 ? r.w * r.h : 0);
    const best = area(beside) >= area(under) ? beside : under;

    // A dot is 2 to 4 CSS pixels, aiming for a field about 300 dots wide.
    const dot = Math.max(2, Math.min(4, Math.round(best.w / 300)));
    const w = Math.floor(best.w / dot);
    const h = Math.floor(best.h / dot);
    if (w < 130 || h < 150) return null;
    return { x: best.x + Math.floor((best.w - w * dot) / 2), y: best.y, w, h, dot };
}

export default function invaders(masthead) {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sound = calm ? null : createSound();
    const ink = getComputedStyle(masthead).getPropertyValue('--two-b').trim() || '#fff';

    const box = document.createElement('div');
    box.className = 'arcade';
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML = '<canvas class="arcade__screen"></canvas>';
    const canvas = box.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let game = null;
    let layout = null;
    let dpr = 1;
    let visible = true;
    let raf = 0;
    let last = 0;
    let carry = 0;

    function place(spot) {
        Object.assign(box.style, { left: spot.x + 'px', top: spot.y + 'px', width: spot.w * spot.dot + 'px', height: spot.h * spot.dot + 'px' });
    }

    function newGame(spot) {
        layout = spot;
        dpr = window.devicePixelRatio || 1;
        place(spot);
        canvas.width = Math.round(spot.w * spot.dot * dpr);
        canvas.height = Math.round(spot.h * spot.dot * dpr);
        game = new Game({ width: spot.w, height: spot.h, top: HUD, hi: load(HI_KEY) });
        if (sound) sound.play('bonusGone');
    }

    function draw() {
        const k = dpr * layout.dot;
        const put = (sprite, x, y, scale = 1) => {
            ctx.setTransform(k * scale, 0, 0, k * scale, Math.round(x) * k, Math.round(y) * k);
            ctx.fill(pathOf(sprite));
        };
        // A line of lettering with its left edge at x, or centred on x. Returns its right edge.
        const write = (text, x, y, { centred = false, scale = 1 } = {}) => {
            const line = typeset(text);
            const left = centred ? Math.round(x - (line.w * scale) / 2) : x;
            for (const { glyph, x: at } of line.glyphs) put(glyph, left + at * scale, y, scale);
            return left + line.w * scale;
        };
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = ink;

        ctx.setTransform(k, 0, 0, k, 0, 0);
        ctx.fillRect(0, game.ground, game.w, 1);

        for (const bunker of game.bunkers) {
            if (bunker.drawn !== bunker.version) {
                bunker.path = bunkerPath(bunker);
                bunker.drawn = bunker.version;
            }
            ctx.setTransform(k, 0, 0, k, bunker.x * k, bunker.y * k);
            ctx.fill(bunker.path);
        }
        // At the end a patch across the middle is kept clear for "GAME OVER".
        const over = game.phase === 'over' ? typeset('GAME OVER') : null;
        const scale = over && over.w * 3 <= game.w * OVER_SHARE ? 3 : 2;
        const patch = over && {
            x: Math.round((game.w - over.w * scale) / 2) - OVER_PAD,
            y: Math.round((game.h - LINE * scale) / 2) - OVER_PAD,
            w: over.w * scale + OVER_PAD * 2,
            h: LINE * scale + OVER_PAD * 2,
        };
        const clear = (unit) => !patch || unit.x >= patch.x + patch.w || unit.x + unit.w <= patch.x || unit.y >= patch.y + patch.h || unit.y + unit.h <= patch.y;

        for (const inv of game.invaders) {
            if (inv.alive && inv.shown && clear(inv)) put(sprites[inv.type][game.march.frame], inv.x, inv.y);
        }
        if (game.bonus) put(sprites.headset[0], game.bonus.x, game.bonus.y);
        const p = game.player;
        if (p.alive) put(sprites.rover[p.frame], p.x, p.y);
        if (game.shot) put(sprites.shot[0], game.shot.x, game.shot.y);
        for (const bomb of game.bombs) put(sprites.bomb[Math.floor(bomb.t / 0.08) % 2], bomb.x, bomb.y);

        for (const effect of game.effects) {
            if (effect.kind === 'burst') put(sprites.burst[0], effect.x, effect.y);
            else if (effect.kind === 'pop') put(sprites.pop[0], effect.x, effect.y);
            else if (effect.kind === 'wreck') put(sprites.wreck[Math.floor(effect.t / 0.1) % 2], effect.x, effect.y);
            else if (effect.kind === 'score') write(effect.text, effect.x, effect.y, { centred: true });
        }

        // Spare rovers, top right.
        const spare = Math.max(0, game.lives - (p.alive ? 1 : 0));
        const icon = sprites.rover[0];
        for (let i = 0; i < spare; i++) put(icon, game.w - (i + 1) * (icon.w + 4), Math.floor((game.top - icon.h) / 2));

        // The score and the high score, top left. On a field too narrow for both, the high score
        // gives way to the spare rovers.
        const line = Math.floor((game.top - LINE) / 2);
        const hi = 'HI ' + Math.max(game.hi, game.score);
        const hiAt = write('SCORE ' + game.score, 0, line) + HUD_GAP;
        if (hiAt + typeset(hi).w <= game.w - spare * (icon.w + 4) - 2) write(hi, hiAt, line);

        if (patch) {
            ctx.setTransform(k, 0, 0, k, 0, 0);
            ctx.clearRect(patch.x, patch.y, patch.w, patch.h);
            write('GAME OVER', patch.x + OVER_PAD, patch.y + OVER_PAD, { scale });
        }
    }

    function frame(now) {
        raf = 0;
        const dt = Math.min(0.1, last ? (now - last) / 1000 : 0);
        last = now;
        carry += dt;
        while (carry >= TICK) {
            game.tick();
            carry -= TICK;
        }
        for (const event of game.events) sound.play(event.type, event.value);
        game.events.length = 0;
        draw();
        if (game.phase === 'over') {
            save(HI_KEY, game.hi);
            return;
        }
        if (visible && !document.hidden) raf = requestAnimationFrame(frame);
    }

    function run() {
        const awake = visible && !document.hidden && game && game.phase !== 'over';
        sound.setAwake(awake);
        if (awake && !raf) {
            last = 0;
            raf = requestAnimationFrame(frame);
        }
    }

    function start() {
        const spot = room(masthead);
        if (!spot) return;
        masthead.prepend(box);
        newGame(spot);

        if (calm) {
            while (game.phase === 'arrive') game.tick();
            draw();
            box.classList.add('is-on');
            return;
        }
        requestAnimationFrame(() => box.classList.add('is-on'));

        // The sound switch, top left. Sound is on unless the visitor turned it off before, but
        // the browser holds it back until they first click or press a key somewhere on the page.
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'masthead__sound';
        button.textContent = 'Sound';
        button.setAttribute('aria-pressed', String(sound.enabled));
        button.addEventListener('click', () => {
            if (!(sound.enabled && !sound.unlocked)) sound.setEnabled(!sound.enabled);
            sound.unlock();
            button.setAttribute('aria-pressed', String(sound.enabled));
        });
        masthead.append(button);
        const unlock = (event) => {
            if (!(event.target instanceof Element && event.target.closest('.masthead__sound'))) sound.unlock();
        };
        for (const type of ['pointerdown', 'keydown', 'touchend']) window.addEventListener(type, unlock, { capture: true, passive: true });

        if ('IntersectionObserver' in window) {
            new IntersectionObserver(([entry]) => {
                visible = entry.isIntersecting;
                run();
            }).observe(box);
        }
        document.addEventListener('visibilitychange', run);

        // A new size of field means a new game; otherwise the field just moves.
        let timer;
        if (!('ResizeObserver' in window)) return run();
        new ResizeObserver(() => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const spot = room(masthead);
                if (!spot) {
                    box.hidden = true;
                    return;
                }
                box.hidden = false;
                if (spot.w === layout.w && spot.h === layout.h && spot.dot === layout.dot) {
                    layout = spot;
                    place(spot);
                } else {
                    newGame(spot);
                    run();
                }
            }, 250);
        }).observe(masthead);

        run();
    }

    // Measure once the web font is in, so the name is its real width.
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    Promise.all([fonts, new Promise((resolve) => setTimeout(resolve, calm ? 0 : START_AFTER))]).then(start);
}
