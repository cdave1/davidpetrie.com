import React from 'react';
import { byTitle, findImage, imageSrc } from '../../data/helpers';
import { email, lede, links, name } from '../../data/hero';

const photo = findImage(byTitle('Ocean'), 'img_0526.jpg');

// tasteskill hero "Photograph for a letter": the name on one line at the vertical centre with a
// photograph set into the word space as if it were a glyph; everything else at the edges.
export default function PhotoLetter() {
    return (
        <section className="lh lh-letter" aria-label="Introduction">
            <div className="lh-letter__top" data-rise style={{ '--i': 2 }}>
                <a href="/">David Petrie</a>
                <ul>{links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
            </div>
            <h1 className="lh-letter__name">
                <span data-rise style={{ '--i': 0 }}>{name[0]}</span>
                <span className="lh-letter__frame" data-rise style={{ '--i': 1 }}>
                    <img src={imageSrc(photo)} width={photo.file.size.w} height={photo.file.size.h} alt="" fetchpriority="high" />
                </span>
                <span className="sr-only"> </span>
                <span data-rise style={{ '--i': 0 }}>{name[1]}</span>
            </h1>
            <div className="lh-letter__bottom" data-rise style={{ '--i': 3 }}>
                <p>{lede}</p>
                <a className="text-link" href={email}>Email me</a>
            </div>
        </section>
    );
}
