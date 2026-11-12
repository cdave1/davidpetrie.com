// The game's lettering, drawn in the same dots as its units: small heavy capitals five dots tall, with
// two-dot stems and one-dot bars. Only the characters the game shows are here: the digits and the letters of
// "SCORE", "HI" and "GAME OVER".

import { parse } from './sprites.js';

const art = {
    0: ['.###.', '##.##', '##.##', '##.##', '.###.'],
    1: ['..##.', '.###.', '..##.', '..##.', '.####'],
    2: ['####.', '...##', '.###.', '##...', '#####'],
    3: ['####.', '...##', '.###.', '...##', '####.'],
    4: ['##.##', '##.##', '#####', '...##', '...##'],
    5: ['#####', '##...', '####.', '...##', '####.'],
    6: ['.###.', '##...', '####.', '##.##', '.###.'],
    7: ['#####', '...##', '..##.', '.##..', '.##..'],
    8: ['.###.', '##.##', '.###.', '##.##', '.###.'],
    9: ['.###.', '##.##', '.####', '...##', '.###.'],
    A: ['.###.', '##.##', '#####', '##.##', '##.##'],
    C: ['.####', '##...', '##...', '##...', '.####'],
    E: ['#####', '##...', '####.', '##...', '#####'],
    G: ['.####', '##...', '##.##', '##.##', '.####'],
    H: ['##.##', '##.##', '#####', '##.##', '##.##'],
    I: ['####', '.##.', '.##.', '.##.', '####'],
    M: ['##...##', '###.###', '#######', '##.#.##', '##...##'],
    O: ['.###.', '##.##', '##.##', '##.##', '.###.'],
    R: ['####.', '##.##', '####.', '##.##', '##.##'],
    S: ['.####', '##...', '.###.', '...##', '####.'],
    V: ['##.##', '##.##', '##.##', '.###.', '..#..'],
};

const glyphs = Object.fromEntries(Object.entries(art).map(([char, rows]) => [char, parse(rows)]));

export const LINE = 5; // the height of a line, in dots
const GAP = 1; // between letters
const SPACE = 3; // a space, with a gap on each side of it

// A line of text set in dots: each glyph with where it starts, and the width of the whole line.
export function typeset(text) {
    const line = { w: 0, glyphs: [] };
    for (const char of String(text)) {
        const glyph = glyphs[char];
        if (glyph) line.glyphs.push({ glyph, x: line.w });
        line.w += (glyph ? glyph.w : SPACE) + GAP;
    }
    line.w -= GAP;
    return line;
}
