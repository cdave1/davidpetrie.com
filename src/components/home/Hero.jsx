import React from 'react';
import { lede, links, name } from '../../data/hero';

// tasteskill hero "Stacked name, two inks": one flat field and no picture, the name on two lines
// in two inks, the links top-right, the sentence in the bottom-right corner. The
// name is the logo, so there is no monogram.
export default function Hero() {
    return (
        <section className="masthead" aria-label="Introduction">
            <div className="masthead__top" data-rise style={{ '--i': 2 }}>
                <ul>
                    {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
                </ul>
            </div>
            <h1 className="masthead__name">
                <span className="masthead__line"><span style={{ '--i': 0 }}>{name[0]}</span></span>
                <span className="sr-only"> </span>
                <span className="masthead__line"><span style={{ '--i': 1 }}>{name[1]}</span></span>
            </h1>
            <p className="masthead__lede" data-rise style={{ '--i': 1 }}>{lede}</p>
        </section>
    );
}
