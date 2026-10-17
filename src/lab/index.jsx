// The lab: the home page with other hero layouts from the tasteskill library, in any of a few
// library palettes. Built only by `npm run dev` (or `node scripts/build.mjs --lab`) into /lab/.

import React from 'react';
import Hero from '../components/home/Hero';
import Corners from './heroes/Corners';
import UnderPhoto from './heroes/UnderPhoto';
import PhotoLetter from './heroes/PhotoLetter';
import ContactSheet from './heroes/ContactSheet';
import InsetCrossing from './heroes/InsetCrossing';
import palettes from './palettes';

export const heroes = [
    { id: 'two-inks', name: 'Stacked name, two inks', note: 'On the site now. No picture: one flat field, the name on two lines in two inks.', render: () => <Hero /> },
    { id: 'corners', name: 'Name split to corners', note: 'The site hero until October 2026. The name in opposite corners of the first screen.', render: () => <Corners /> },
    { id: 'under-photo', name: 'Name under a photograph', note: 'A photograph over the top 58%, the name across the band beneath it.', render: () => <UnderPhoto /> },
    { id: 'photo-letter', name: 'Photograph for a letter', note: 'The name on one line with a photograph set into the word space.', render: () => <PhotoLetter /> },
    { id: 'contact-sheet', name: 'Sheet with a text cell', note: 'A contact sheet of the work; one cell of it is the introduction.', render: () => <ContactSheet /> },
    { id: 'inset-crossing', name: 'Inset photograph, crossing wordmark', note: 'A tall inset photograph; the name in lowercase crosses onto it.', render: () => <InsetCrossing /> },
];

export { palettes };

const vars = (p) =>
    `--bg:${p.bg};--surface:${p.surface};--ink:${p.ink};--muted:${p.muted};--accent:${p.accent};--accent-ink:${p.accentInk};` +
    `--field:${p.field};--field-ink:${p.fieldInk};--two-field:${p.twoInks[0]};--two-a:${p.twoInks[1]};--two-b:${p.twoInks[2]}`;

export const paletteCss =
    `:root{--two-field:${palettes[0].twoInks[0]};--two-a:${palettes[0].twoInks[1]};--two-b:${palettes[0].twoInks[2]}}\n` +
    palettes.map((p) => `html[data-palette="${p.id}"]{${vars(p)}}`).join('\n');

// Read ?palette= and ?bare before the first paint.
export const headScript = `(function(){var q=new URLSearchParams(location.search),p=q.get('palette');if(p)document.documentElement.setAttribute('data-palette',p);if(q.has('bare'))document.documentElement.classList.add('lab-bare')})()`;

export function LabBar({ current }) {
    return (
        <div className="lab-bar" aria-label="Lab">
            <p>
                <strong>Hero:</strong>{' '}
                {heroes.map((h, i) => (
                    <React.Fragment key={h.id}>
                        <a href={`/lab/${h.id}/`} data-keep-query="" aria-current={h.id === current ? 'page' : undefined}>{h.name}</a>
                        {i < heroes.length - 1 ? ' · ' : ''}
                    </React.Fragment>
                ))}
            </p>
            <p>
                <strong>Palette:</strong>{' '}
                {palettes.map((p, i) => (
                    <React.Fragment key={p.id}>
                        <a href={`?palette=${p.id}`} data-palette-link={p.id}>
                            <span className="swatch" style={{ background: p.bg, outline: `3px solid ${p.accent}` }} />{p.name}
                        </a>
                        {i < palettes.length - 1 ? ' · ' : ''}
                    </React.Fragment>
                ))}
            </p>
            <p><a href="/lab/" data-keep-query="">All options</a> · <a href="?bare">Hide this bar</a></p>
        </div>
    );
}

// Keep the chosen palette when switching heroes, and mark the current palette.
export const barScript = `(function(){var q=new URLSearchParams(location.search),p=q.get('palette')||'${palettes[0].id}';document.querySelectorAll('[data-keep-query]').forEach(function(a){a.href=a.getAttribute('href')+'?palette='+p});document.querySelectorAll('[data-palette-link]').forEach(function(a){if(a.getAttribute('data-palette-link')===p)a.setAttribute('aria-current','true')})})()`;

export function LabIndex() {
    return (
        <main className="lab-index">
            <h1>Lab</h1>
            <p>The home page with other hero layouts from the tasteskill library, in different library palettes. Pick a cell; switch either from the bar at the bottom of each page.</p>
            <table>
                <thead>
                    <tr>
                        <th>Hero</th>
                        {palettes.map((p) => <th key={p.id}><span className="swatch" style={{ background: p.bg, outline: `3px solid ${p.accent}` }} /> {p.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {heroes.map((h) => (
                        <tr key={h.id}>
                            <th><strong>{h.name}</strong><br /><span>{h.note}</span></th>
                            {palettes.map((p) => <td key={p.id}><a href={`/lab/${h.id}/?palette=${p.id}`}>Open</a></td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export const labIndexCss = `.lab-index{font:15px/1.5 system-ui,sans-serif;color:#111;background:#fff;padding:32px;min-height:100vh}.lab-index h1{font-size:32px;margin:0 0 8px}.lab-index p{max-width:70ch}.lab-index table{border-collapse:collapse;margin-top:24px}.lab-index th,.lab-index td{border:1px solid #ddd;padding:8px 10px;text-align:left;vertical-align:top}.lab-index th span{font-weight:400;color:#555}.lab-index .swatch{display:inline-block;width:12px;height:12px;vertical-align:-1px}`;
