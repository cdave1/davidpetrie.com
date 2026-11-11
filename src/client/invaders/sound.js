// The game's sounds, made on the spot with the Web Audio API; there are no sound files. Browsers
// only allow sound once the visitor has clicked or pressed a key, so nothing plays before that.

const KEY = 'arcade-sound';

function remembered() {
    try {
        return localStorage.getItem(KEY) !== 'off';
    } catch {
        return true;
    }
}

export function createSound() {
    const Context = window.AudioContext || window.webkitAudioContext;
    let ctx = null;
    let out = null;
    let noise = null;
    let hum = null; // the bonus headset's warble, while it is on screen
    let enabled = remembered();
    let unlocked = false;
    let awake = true; // false while the game is off screen or over

    const ready = () => ctx && enabled && unlocked && awake;

    function settle() {
        if (!ctx) return;
        // Older Safari returns nothing here rather than a promise.
        Promise.resolve(ready() ? ctx.resume() : ctx.suspend()).catch(() => {});
    }

    function tone({ type = 'square', from, to = from, dur, vol = 0.2, at = 0 }) {
        const t = ctx.currentTime + at;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(from, t);
        if (to !== from) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(gain).connect(out);
        osc.start(t);
        osc.stop(t + dur + 0.02);
    }

    function hiss({ dur, vol = 0.4, filter = 'bandpass', from, to = from, q = 1 }) {
        const t = ctx.currentTime;
        const src = ctx.createBufferSource();
        const shape = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        src.buffer = noise;
        shape.type = filter;
        shape.Q.value = q;
        shape.frequency.setValueAtTime(from, t);
        if (to !== from) shape.frequency.exponentialRampToValueAtTime(to, t + dur);
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(shape).connect(gain).connect(out);
        src.start(t);
        src.stop(t + dur + 0.02);
    }

    const tune = (notes, step, type = 'square', vol = 0.12) =>
        notes.forEach((f, i) => tone({ type, from: f, dur: step * 0.95, vol, at: i * step }));

    const voices = {
        shoot: () => tone({ from: 1500, to: 300, dur: 0.09, vol: 0.07 }),
        march: (note) => tone({ type: 'triangle', from: [98, 110, 131][note], to: [92, 104, 123][note], dur: 0.09, vol: 0.5 }),
        hit: () => {
            hiss({ dur: 0.18, from: 1400, to: 300, vol: 0.5 });
            tone({ from: 260, to: 60, dur: 0.14, vol: 0.06 });
        },
        clink: () => hiss({ dur: 0.05, filter: 'highpass', from: 3000, vol: 0.25 }),
        die: () => {
            hiss({ dur: 0.9, filter: 'lowpass', from: 3000, to: 120, vol: 0.6 });
            tone({ type: 'sawtooth', from: 320, to: 40, dur: 0.8, vol: 0.08 });
        },
        bonusHit: () => tune([784, 988, 1175, 1568], 0.05),
        wave: () => tune([523, 659, 784, 1047], 0.08),
        over: () => tune([392, 330, 262, 196, 131], 0.2, 'triangle', 0.3),
        bonus: () => {
            if (hum) return;
            const osc = ctx.createOscillator();
            const lfo = ctx.createOscillator();
            const depth = ctx.createGain();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = 620;
            lfo.frequency.value = 7;
            depth.gain.value = 140;
            gain.gain.value = 0.025;
            lfo.connect(depth).connect(osc.frequency);
            osc.connect(gain).connect(out);
            osc.start();
            lfo.start();
            hum = { stop: () => [osc, lfo].forEach((node) => node.stop()) };
        },
        bonusGone: () => {
            if (hum) hum.stop();
            hum = null;
        },
    };

    return {
        get enabled() {
            return enabled;
        },
        get unlocked() {
            return unlocked;
        },

        // Call from inside a click or key press: the browser allows sound from then on.
        unlock() {
            if (!enabled || !Context) return;
            if (!ctx) {
                ctx = new Context();
                out = ctx.createGain();
                out.gain.value = 0.35;
                out.connect(ctx.destination);
                noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
                const data = noise.getChannelData(0);
                for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
            }
            unlocked = true;
            settle();
        },

        setEnabled(on) {
            enabled = on;
            try {
                localStorage.setItem(KEY, on ? 'on' : 'off');
            } catch {}
            if (!on) voices.bonusGone();
            settle();
        },

        setAwake(on) {
            awake = on;
            settle();
        },

        play(type, value) {
            // The headset's hum must always be able to stop, even while muted.
            if (type === 'bonusGone' && ctx) return voices.bonusGone();
            if (ready() && voices[type]) voices[type](value);
        },
    };
}
