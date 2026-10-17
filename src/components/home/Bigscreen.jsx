import React from 'react';
import { byTitle, findImage, imageSrc, projectPath, yearRange } from '../../data/helpers';

const bigscreen = byTitle('Bigscreen');
const pick = (name) => findImage(bigscreen, name);
const hero = pick('beyond-2-in-hand');
const theatre = pick('theatre');
const cushion = pick('custom-cushion');

// The app, room by room: one picture for each kind of work in the list.
const rooms = [
    { image: pick('sports-bar'), caption: 'Watching together: a match in the sports bar', alt: 'Avatars cheering at a football match on a big screen in a VR sports bar, with chess on a table' },
    { image: pick('screens'), caption: 'Several screens open at once in one room', alt: 'Avatars on a sofa in a VR living room facing a large screen and several smaller floating windows' },
    { image: pick('browser'), caption: 'The virtual browser', alt: 'Two avatars using floating YouTube windows in a VR room while others watch' },
    { image: pick('lobby'), caption: 'The social product: the lobby', alt: 'Avatars in a VR lobby playing with toy remote-control trucks' },
]

const app = [
    'The Oculus Go and Quest releases',
    'DRM systems',
    'The cinema, TV and video player releases',
    'Multiplayer systems for watching video together in VR',
    'Remote Desktop, the virtual browser and the social product',
    'Build systems, CI/CD and internal tools',
    'All of the server infrastructure: devops, APIs, AWS, databases, Terraform and maintenance systems',
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

// Eight years at Bigscreen: one plate on the shared midline, then the app (picture left, list right,
// then four rooms from the app) and the headset (story left, picture right, held in view while the story scrolls).
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
                    I spent eight years at Bigscreen, working on almost every project and release, across the Bigscreen VR app and the headset.
                </p>
                <p className="bigscreen__more" data-reveal style={{ '--i': 1 }}>
                    <a className="text-link" href={projectPath(bigscreen)}>The full story</a>
                </p>
            </div>

            <div className="grid bigscreen__row bigscreen__row--app">
                <div className="bigscreen__side">
                    <h3 data-reveal>The Bigscreen app</h3>
                    <Picture image={theatre} caption="A full cinema in Bigscreen" alt="A crowd of avatars in a VR cinema watching spaceships over a desert on a large screen" />
                </div>
                <div className="bigscreen__text">
                    <p data-reveal>
                        Over six million people have used it on Steam and Meta Quest. Highlights:
                    </p>
                    <ul className="bigscreen__list">
                        {app.map((line, i) => <li key={line} data-reveal style={{ '--i': i % 4 }}>{line}</li>)}
                    </ul>
                    <p data-reveal>
                        An early adopter of AI tools, I shipped Bigscreen’s first “AI developed” UI in the Bigscreen app in early 2025.
                    </p>
                </div>
            </div>

            <div className="grid bigscreen__rooms">
                {rooms.map((room) => <Picture key={room.caption} {...room} />)}
            </div>

            <div className="grid bigscreen__row bigscreen__row--beyond">
                <div className="bigscreen__text bigscreen__story">
                    <h3 data-reveal>Bigscreen Beyond</h3>
                    <p data-reveal>
                        We started “real work” on the Bigscreen Beyond headset in 2022, but we had been talking
                        about it for many years before then. I participated a lot in those discussions, mainly
                        talking about the frustrations with current headsets, and that we wanted something easier
                        to wear for long sessions. Even today, very few headsets do a good job of just letting you
                        watch a movie for 2 hours.
                    </p>
                    <p data-reveal>
                        Reducing the weight is something we talked about at length, and I like to think my
                        annoying persistence on it is my one major contribution to how we designed the overall
                        product. The company has had a maniacal focus on making the headset as light as possible
                        ever since, with a motto of “every gram matters”. This is certainly true with the Beyond 2,
                        which is 107 grams, compared to 515 grams for the Meta Quest 3.
                    </p>
                    <p data-reveal>
                        On the Beyond 1, we decided to remove the bulky adjustment systems that other headsets had.
                        This led to the idea of personalizing each person’s headset, which required each user to
                        scan their face so we could get each user’s{' '}
                        <a className="text-link" href="https://en.wikipedia.org/wiki/Pupillary_distance">interpupillary distance</a>{' '}
                        and then produce a rubber gasket that was perfectly molded to the contours of their face.
                    </p>
                    <p data-reveal>
                        Pulling this off required a whole personalized manufacturing system. My particular
                        contribution was designing the face scanning product and handling the shepherding of the
                        customer’s scan through to the production and shipping of the item to them. This was end
                        to end: from the customer’s scanning app infra, through to manufacturing to shipping, with
                        my software doing something at every point. Very grueling to work on, and a lot of
                        in-person testing at the LA factory.
                    </p>
                    <p data-reveal>
                        The demands of the hyper personalization meant I had to build out a logistics and shipping
                        system; we couldn’t use off-the-shelf software like a Shopify app. Turns out no one builds
                        personalization software like this. This software ended up shipping almost everything
                        Bigscreen has produced, including more than 50,000 orders to over 50 countries since 2023.
                    </p>
                </div>
                <div className="bigscreen__side">
                    <Picture image={cushion} caption="A custom-fit cushion, made from a scan of its owner’s face" alt="A black Beyond face cushion shaped to one person’s face" at="50% 50%" />
                </div>
            </div>

            <p className="bigscreen__credit caption">
                Pictures from <a className="text-link" href="https://www.bigscreenvr.com/about">bigscreenvr.com</a>,
                the <a className="text-link" href="https://www.bigscreenvr.com/press">Bigscreen press kit</a> and
                the <a className="text-link" href="https://www.meta.com/experiences/bigscreen-beta/2497738113633933/">Bigscreen Meta Quest store page</a>.
            </p>
        </section>
    );
}
