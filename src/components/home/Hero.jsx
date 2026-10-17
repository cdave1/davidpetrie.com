import React from 'react';
import { byTitle, findImage, imageSrc } from '../../data/helpers';

const ocean = findImage(byTitle('Ocean'), 'usb_charge.jpg');
const smashed = findImage(byTitle('Smashed'), 'screenshot_2009_10_16_11_36_07');

// The name is cut into two halves pinned to opposite corners; the first screen and the
// intro pass between them, then the pin releases.
export default function Hero() {
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
                        <p className="hero__lede" data-rise style={{ '--i': 0 }}>
                            Software engineer in Wellington, New Zealand, and founder of kotari. I build
                            tools that let people make things they couldn’t before.
                        </p>
                        <a className="button" href="mailto:me@davidpetrie.com" data-rise style={{ '--i': 1 }}>
                            Email me
                        </a>
                    </div>
                    <ul className="hero__links" aria-label="Sections" data-rise style={{ '--i': 2 }}>
                        <li><a href="/about/">About</a></li>
                        <li><a href="/projects/">Projects</a></li>
                        <li><a href="/reading/">Reading</a></li>
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

            <div className="grid hero__intro">
                <p className="hero__statement" data-reveal>
                    Since 2000: a DVD store, iPhone games, a pocket Linux server, a VR headset and now
                    AI agents.
                </p>
                <div className="hero__past">
                    <figure className="wide" data-reveal="shutter" style={{ '--i': 1 }}>
                        <img
                            src="/archive/mh.png"
                            width="1258"
                            height="826"
                            alt="Moviehouse, an online DVD store from 2005, showing a product page for Batman Begins"
                        />
                        <figcaption className="caption">Moviehouse, my DVD store, 2005</figcaption>
                    </figure>
                    <figure className="tall" data-reveal="shutter" style={{ '--i': 2 }}>
                        <img
                            src={imageSrc(smashed)}
                            width={smashed.file.size.w}
                            height={smashed.file.size.h}
                            alt="Smashed, an iPhone physics game: a tower of wooden blocks over water"
                        />
                        <figcaption className="caption">Smashed, for iPhone, 2009</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
