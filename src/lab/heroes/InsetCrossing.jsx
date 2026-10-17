import React from 'react';
import { byTitle, findImage, imageSrc } from '../../data/helpers';
import { email, lede, links } from '../../data/hero';

const photo = findImage(byTitle('Ocean'), 'usb_charge.jpg');

// tasteskill hero "Inset photograph, crossing wordmark": a tall photograph inset on the left, the
// sentence on the right half's axis, and the name in lowercase along the bottom, crossing onto
// the photograph.
export default function InsetCrossing() {
    return (
        <section className="lh lh-inset" aria-label="Introduction">
            <figure className="lh-inset__photo">
                <img src={imageSrc(photo)} width={photo.file.size.w} height={photo.file.size.h} alt="Ocean, a white pocket-sized Linux server, standing on a dark desk with its charging lights on" fetchpriority="high" />
            </figure>
            <ul className="lh-inset__nav" data-rise style={{ '--i': 2 }}>
                {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
                <li><a className="button" href={email}>Email me</a></li>
            </ul>
            <p className="lh-inset__lede" data-rise style={{ '--i': 0 }}>{lede}</p>
            <h1 className="lh-inset__name" data-rise style={{ '--i': 1 }}>david petrie</h1>
        </section>
    );
}
