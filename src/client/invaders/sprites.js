// The game's pixel art, one string per row: '#' is a dot, anything else is empty. Each unit has
// two frames that alternate as it moves.

const art = {
    // Top row: a one-eyed watcher that looks left and right.
    eye: [
        ['#...#...#', '.#######.', '##.....##', '#..###..#', '##.....##', '.#######.', '.#.....#.', '#.......#'],
        ['.#..#..#.', '.#######.', '##.....##', '#.###...#', '##.....##', '.#######.', '..#...#..', '..#...#..'],
    ],
    // Middle rows: a jellyfish with swaying tentacles.
    jelly: [
        ['...#####...', '.#########.', '###.###.###', '###########', '.#.#.#.#.#.', '#..#.#.#..#', '.#..#.#..#.', '..#.....#..'],
        ['...#####...', '.#########.', '###.###.###', '###########', '.#.#.#.#.#.', '.#.#.#.#.#.', '#.#..#..#.#', '#.........#'],
    ],
    // Bottom rows: a moth beating its wings.
    moth: [
        ['#.........#', '##...#...##', '###.###.###', '.#########.', '..#######..', '..#.#.#.#..', '.#.......#.', '#.........#'],
        ['...........', '.....#.....', '#...###...#', '###########', '.#########.', '..#.#.#.#..', '..#.....#..', '..#.....#..'],
    ],
    // The player: a little rover whose treads roll as it drives.
    rover: [
        ['......#......', '......#......', '....#####....', '..#########..', '#############', '#.#.#.#.#.#.#', '.#.#.#.#.#.#.'],
        ['......#......', '......#......', '....#####....', '..#########..', '#############', '.#.#.#.#.#.#.', '#.#.#.#.#.#.#'],
    ],
    // The bonus that crosses the top now and then: a VR headset.
    headset: [
        ['..############..', '.##############.', '###...####...###', '###...####...###', '.#####....#####.', '...###....###...'],
    ],
    burst: [
        ['#...#...#', '.#..#..#.', '..#...#..', '##.....##', '..#...#..', '.#..#..#.', '#...#...#'],
    ],
    wreck: [
        ['..#...#..#...', '#...#.....#..', '...#..##.#..#', '.#..#####...#', '#.#########.#', '.####.#####..', '#.#.#.#.#.#.#'],
        ['#.....#...#..', '..#.#...#...#', '#....##...#..', '...#####.#...', '.##########..', '###.####.####', '.#.#.#.#.#.#.'],
    ],
    pop: [['#.#', '.#.', '#.#']],
    shot: [['#', '#', '#', '#']],
    bomb: [
        ['#..', '.#.', '..#', '.#.', '#..', '.#.'],
        ['..#', '.#.', '#..', '.#.', '..#', '.#.'],
    ],
};

export const parse = (rows) => ({
    w: rows[0].length,
    h: rows.length,
    dots: rows.flatMap((row, y) => Array.from(row).flatMap((c, x) => (c === '#' ? [[x, y]] : []))),
});

export const sprites = Object.fromEntries(Object.entries(art).map(([name, frames]) => [name, frames.map(parse)]));

// A bunker: a rounded block with an arch underneath. 1 is a dot.
export function bunkerCells() {
    const w = 18;
    const h = 12;
    const cells = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const corner = Math.max(0, 4 - y); // the top corners are cut on a diagonal
            const inCorner = x < corner || x >= w - corner;
            const arch = y >= 9 && x >= 6 - (y - 9) && x < 12 + (y - 9);
            cells[y * w + x] = inCorner || arch ? 0 : 1;
        }
    }
    return { w, h, cells };
}
