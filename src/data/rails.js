import { byTitle, findImage, imageSrc } from './helpers';
import credits from './credits';

const own = (title, file, caption, alt) => {
    const image = findImage(byTitle(title), file);
    return { src: imageSrc(image), w: image.file.size.w, h: image.file.size.h, caption, alt };
};

// Pictures set in the margin of the markdown pages, keyed by page path.
const rails = {
    '/about/': {
        pictures: [
            own('kotari', 'shoutline', 'Shoutline, a kotari product, 2026', 'The Shoutline website: your own private news team'),
            own('Bigscreen', 'clear-shell-on-black', 'Bigscreen Beyond 2, from the Bigscreen press kit', 'Bigscreen Beyond 2 in a clear shell, held up against black'),
            own('Algorithmic Design Engine', 'AE00011.png', 'Algorithmic Design Engine, 2017', 'A grid of generated logos on coloured tiles'),
            own('Vast', 'Vast00004.png', 'Vast, 2016', 'Sandstone arches built in Vast against a blue sky'),
            own('Ocean', 'img_0526.jpg', 'Ocean prototypes, 2015', 'Four Ocean prototypes on a desk with their status lights on'),
            own('League of Shadows', 'MapLand', 'League of Shadows, 2013', 'A fortified village in a dark forest, from League of Shadows'),
            own('Smashed', 'smashedpromo.png', 'Smashed, 2009', 'Promotional artwork for Smashed, a wooden block tower game for iPhone'),
            { src: '/archive/mh.png', w: 1258, h: 826, caption: 'Moviehouse, 2005', alt: 'The Moviehouse DVD store website, a product page for Batman Begins' },
        ],
        credits: [credits.bigscreen],
    },
    '/contact/': {
        video: {
            src: '/found/wellington-cable-car-2020-05-17.webm',
            poster: '/found/wellington-cable-car-2020-05-17-poster.jpg',
            caption: 'The Wellington Cable Car, filmed by Tom Ackroyd, 2020',
        },
        pictures: [
            { src: '/found/wellington-harbour.jpg', w: 1920, h: 1302, caption: 'Wellington Harbour, James M. Nairn, 1894', alt: 'Painting of a wharf on Wellington Harbour with a rowing boat on glittering water' },
            { src: '/found/lambton-harbour-wellington-new-zealand-c-1840.jpg', w: 1920, h: 1363, caption: 'Lambton Harbour, Charles Heaphy, about 1840', alt: 'Watercolour of Lambton Harbour in 1840, ships at anchor below green hills' },
            { src: '/found/plan-of-the-city-of-wellington-port.jpg', w: 1600, h: 1080, caption: 'Plan of Wellington, 1841', alt: 'Hand-drawn 1841 survey plan of Wellington' },
        ],
        credits: [credits.cableCar, credits.nairn, credits.heaphy, credits.plan],
    },
};

export default rails;
