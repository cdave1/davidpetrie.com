import React from 'react';
import { byTitle, findImage, imageSrc, projectPath, yearRange } from '../../data/helpers';

const bigscreen = byTitle('Bigscreen');
const pick = (name) => findImage(bigscreen, name);
const hero = pick('beyond-2-in-hand');
const cinema = pick('cinema');
const cushion = pick('custom-cushion');

const app = [
    'The Go and Quest releases',
    'DRM systems',
    'Cinema, TV and video player releases',
    'Multiplayer systems for shared video streaming in VR',
    'Remote Desktop, the virtual browser and the social product',
    'Build systems, CI/CD and internal tools',
    'All of the server infrastructure: devops, APIs, AWS, databases, Terraform and maintenance systems',
];

const beyond = [
    'Face scanning, end to end: from the customer’s scanning app to manufacturing to shipping.',
    'Factory automation for the personalized cushions, including the APIs the assembly line stations use, with plenty of in-person testing at the LA factory.',
    'Shipping and logistics systems built around personalization, with their APIs and internal frontends. They have shipped almost everything Bigscreen has produced: more than 50,000 orders to over 50 countries since 2023.',
];

function Picture({ image, caption, alt, at }) {
    return (
        <figure className="bigscreen__picture" data-reveal>
            <img
                src={imageSrc(image)}
                width={image.file.size.w}
                height={image.file.size.h}
                style={at ? { objectPosition: at } : undefined}
                alt={alt}
                loading="lazy"
            />
            <figcaption className="caption">{caption}</figcaption>
        </figure>
    );
}

// Eight years at Bigscreen: one plate on the shared midline, then the app and the headset side by side.
export default function Bigscreen() {
    return (
        <section className="bigscreen" id="bigscreen" aria-labelledby="bigscreen-title">
            <div className="plate plate--wide">
                <img
                    className="plate__img"
                    src={imageSrc(hero)}
                    width={hero.file.size.w}
                    height={hero.file.size.h}
                    alt="Bigscreen Beyond 2 held in two hands, its lenses facing the camera"
                    loading="lazy"
                />
                <div className="plate__row">
                    <span className="plate__years">{yearRange(bigscreen)}</span>
                    <h2 className="plate__title" id="bigscreen-title">
                        <a href={projectPath(bigscreen)}>Bigscreen</a>
                    </h2>
                    <span className="plate__fact">Software and the Beyond VR headset</span>
                </div>
            </div>

            <div className="grid bigscreen__intro">
                <p className="bigscreen__statement" data-reveal>
                    Eight years on almost every project and release, in the app and in the headset.
                </p>
                <p className="bigscreen__more" data-reveal style={{ '--i': 1 }}>
                    <a className="text-link" href={projectPath(bigscreen)}>The full story</a>
                </p>
            </div>

            <div className="grid bigscreen__parts">
                <article className="bigscreen__part bigscreen__part--app">
                    <h3 data-reveal>The Bigscreen app</h3>
                    <Picture image={cinema} caption="Bigscreen Cinema, 2019" alt="A cinema in VR: rows of seats facing a large screen playing a film" />
                    <p data-reveal>
                        Over six million people have used it on Steam and Meta Quest. I worked on almost
                        everything:
                    </p>
                    <ul className="bigscreen__list">
                        {app.map((line, i) => <li key={line} data-reveal style={{ '--i': i % 4 }}>{line}</li>)}
                    </ul>
                    <p data-reveal>
                        I was an early adopter of AI tools, and shipped Bigscreen’s first vibe-coded UI in 2025.
                    </p>
                </article>

                <article className="bigscreen__part bigscreen__part--beyond">
                    <h3 data-reveal>Bigscreen Beyond</h3>
                    <Picture image={cushion} caption="A custom-fit cushion, made from a scan of its owner’s face" alt="A black Beyond face cushion shaped to one person’s face" at="50% 50%" />
                    <p className="bigscreen__weight" data-reveal>Beyond 2 weighs 107 grams.</p>
                    <p data-reveal>
                        I championed many ideas that made it into the headset. I wouldn’t shut up about heavy
                        headsets, and I think it helped the hyper-focus on making it as light as possible.
                    </p>
                    <ul className="bigscreen__list bigscreen__list--long">
                        {beyond.map((line, i) => <li key={line} data-reveal style={{ '--i': i }}>{line}</li>)}
                    </ul>
                </article>
            </div>

            <p className="bigscreen__credit caption">
                Pictures from <a className="text-link" href="https://www.bigscreenvr.com/about">bigscreenvr.com</a> and
                the <a className="text-link" href="https://www.bigscreenvr.com/press">Bigscreen press kit</a>.
            </p>
        </section>
    );
}
