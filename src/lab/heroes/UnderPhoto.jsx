import React from 'react';
import { byTitle, findImage, imageSrc } from '../../data/helpers';
import { email, lede, links, name } from '../../data/hero';

const photo = findImage(byTitle('Ocean'), 'img_0526.jpg');

// tasteskill hero "Name under a photograph": a full-bleed photograph over the top 58%, the name
// across the band beneath it on one line, one row of sentence and action between them.
export default function UnderPhoto() {
    return (
        <section className="lh lh-under" aria-label="Introduction">
            <figure className="lh-under__photo">
                <img src={imageSrc(photo)} width={photo.file.size.w} height={photo.file.size.h} alt="Four Ocean prototypes on a desk with their status lights on" fetchpriority="high" />
            </figure>
            <ul className="lh-under__nav" data-rise style={{ '--i': 2 }}>
                {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
            </ul>
            <div className="lh-under__row">
                <p className="lh-under__lede" data-rise style={{ '--i': 0 }}>{lede}</p>
                <a className="button" href={email} data-rise style={{ '--i': 1 }}>Email me</a>
            </div>
            <h1 className="lh-under__name"><span>{name[0]}</span> <span>{name[1]}</span></h1>
        </section>
    );
}
