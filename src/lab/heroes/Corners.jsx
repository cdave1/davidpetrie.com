import React from 'react';
import { byTitle, findImage, imageSrc } from '../../data/helpers';
import { lede, links } from '../../data/hero';

const ocean = findImage(byTitle('Ocean'), 'usb_charge.jpg');

// tasteskill hero "Name split to corners", the site hero until October 2026: the name cut into
// two halves set in opposite corners of the first screen, with the sentence, the action and a
// photograph between them.
export default function Corners() {
    return (
        <section className="hero" aria-label="Introduction">
            <div className="hero__pin">
                <h1 className="hero__name">
                    <span className="hero__half hero__half--first"><span style={{ '--i': 0 }}>David</span></span>
                    <span className="sr-only"> </span>
                    <span className="hero__half hero__half--last"><span style={{ '--i': 1 }}>Petrie</span></span>
                </h1>
            </div>
            <a className="hero__menu" href="#site-footer">Menu</a>

            <div className="hero__screen">
                <div className="hero__panel">
                    <div className="hero__copy">
                        <p className="hero__lede" data-rise style={{ '--i': 0 }}>{lede}</p>
                        <a className="button" href="mailto:me@davidpetrie.com" data-rise style={{ '--i': 1 }}>
                            Email me
                        </a>
                    </div>
                    <ul className="hero__links" aria-label="Sections" data-rise style={{ '--i': 2 }}>
                        {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
                    </ul>
                </div>
                <figure className="hero__photo">
                    <img
                        src={imageSrc(ocean)}
                        width={ocean.file.size.w}
                        height={ocean.file.size.h}
                        alt="Ocean, a white pocket-sized Linux server, standing on a dark desk with its charging lights on"
                        fetchpriority="high"
                    />
                    <figcaption className="caption">Ocean, charging, 2015</figcaption>
                </figure>
            </div>

        </section>
    );
}
