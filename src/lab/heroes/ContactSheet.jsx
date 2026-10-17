import React from 'react';
import { byTitle, findImage, headerImage, yearRange } from '../../data/helpers';
import { email, lede, links } from '../../data/hero';

// Frames for the sheet: one picture per project, chosen to read small.
const pick = [
    ['kotari', 'shoutline'], ['Bigscreen', 'beyond-2-orange'], ['Algorithmic Design Engine', 'AE00011'], ['Vast', 'Vast00004'],
    ['Ocean', 'img_0526'], ['League of Shadows', 'MapLand'], ['Digital Painting', 'layer_22_9'], ['Bigscreen', 'cinema'],
    ['GigaDraw', '001.png'], ['Ocean', 'usb_charge'], ['Little Dragons', 'h1_png'], ['difont', 'thumbnail_2080624fc'],
    ['MadBrix', 'a13_png'], ['CoinToy', '512_512_us'], ['Smashed', 'smashedpromo'], ['Vast', 'dscf2241'],
    ['Pet Fair', 'default_landscape'], ['Dream Engine', 'naut3d.png'], ['HDK v1', 'HDK00001'], ['Bigscreen', 'workbench'],
    ['VR Music Player', 'screen_shot_2014_04_17'], ['FTGLES', 'unicode'], ['PlayCoMo', 'NPC_Mage'], ['kotari', 'korimako.jpg'],
];
const frames = pick.map(([title, file]) => {
    const project = byTitle(title);
    const image = (file && findImage(project, file)) || headerImage(project);
    return { project, image };
});

const thumb = (image) => encodeURI('/images/' + (image.thumbnails.default || image.thumbnails.croppedSmall).path);
const size = (image) => image.thumbnails.default ? image.thumbnails.default.size : image.file.size;

function Frame({ project, image, i }) {
    const s = size(image);
    return (
        <figure className={'lh-sheet__frame lh-sheet__frame--' + (i % 4)} data-rise style={{ '--i': i % 5 }}>
            <img src={thumb(image)} width={Math.round(s.w)} height={Math.round(s.h)} alt={project.title} loading={i < 12 ? undefined : 'lazy'} />
            <figcaption>{project.title}, {yearRange(project)}</figcaption>
        </figure>
    );
}

// tasteskill hero "Sheet with a text cell": the first screen is a contact sheet of the work, six
// staggered columns, and one cell of it is the text panel.
export default function ContactSheet() {
    const column = (n) => frames.slice(n * 4, n * 4 + 4).map((f, i) => <Frame key={f.image.id + n} {...f} i={n * 4 + i} />);
    return (
        <section className="lh lh-sheet" aria-label="Introduction">
            <div className="lh-sheet__col lh-sheet__col--1">{column(0)}</div>
            <div className="lh-sheet__col lh-sheet__col--2">{column(1)}</div>
            <div className="lh-sheet__middle">
                <div className="lh-sheet__pair">{column(2).slice(0, 2)}</div>
                <div className="lh-sheet__panel" data-rise>
                    <h1>David Petrie</h1>
                    <p>{lede}</p>
                    <a className="button" href={email}>Email me</a>
                    <ul>{links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
                </div>
                <div className="lh-sheet__pair">{column(2).slice(2, 4)}</div>
            </div>
            <div className="lh-sheet__col lh-sheet__col--5">{column(3)}</div>
            <div className="lh-sheet__col lh-sheet__col--6">{column(4)}</div>
            <div className="lh-sheet__col lh-sheet__col--7">{column(5)}</div>
        </section>
    );
}
