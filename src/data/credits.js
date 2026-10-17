// Found pictures and footage, downloaded into static/found with their credits (see static/found/credits.json).
const commons = 'Wikimedia Commons';
const met = 'The Metropolitan Museum of Art';
const pd = { licence: 'public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' };
const cc0 = { licence: 'public domain (CC0)', licenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' };

const credits = {
    cableCar: {
        title: 'Wellington Cable Car 2020-05-17',
        creator: 'Tom Ackroyd',
        licence: 'CC BY-SA 4.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:Wellington_Cable_Car_2020-05-17.webm',
    },
    plan: {
        title: 'Plan of the City of Wellington, Port Nicholson, New Zealand 1841',
        creator: 'Felton Mathew',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:Plan_of_the_City_of_Wellington,_Port_Nicholson,_New_Zealand_1841.jpg',
    },
    haeckel: {
        title: 'Discomedusae, from Kunstformen der Natur',
        creator: 'Ernst Haeckel',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:Haeckel_Discomedusae_8.jpg',
    },
    davidPlate: {
        title: 'Plate with the Battle of David and Goliath',
        creator: 'a Byzantine maker, 629–30',
        ...cc0,
        source: met,
        url: 'https://www.metmuseum.org/art/collection/search/464377',
    },
    blueMarble: {
        title: 'The Blue Marble',
        creator: 'the Apollo 17 crew, NASA',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg',
    },
    tesla: {
        title: 'Nikola Tesla, about 1898',
        creator: 'Napoleon Sarony',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:Nikola_Tesla_by_Sarony_c1898.jpg',
    },
    nairn: {
        title: 'Wellington Harbour, 1894',
        creator: 'James M. Nairn',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:James_M._Nairn_-_Wellington_Harbour_-_Google_Art_Project.jpg',
    },
    heaphy: {
        title: 'Lambton Harbour, Wellington, New Zealand c 1840',
        creator: 'Charles Heaphy',
        ...pd,
        source: commons,
        url: 'https://commons.wikimedia.org/wiki/File:Lambton_Harbour,_Wellington,_New_Zealand_c_1840.jpg',
    },
    bigscreen: {
        title: 'Bigscreen product, app, cinema and factory pictures',
        creator: 'Bigscreen, Inc.',
        licence: 'all rights reserved',
        licenceUrl: 'https://www.bigscreenvr.com/press',
        source: 'bigscreenvr.com, the Bigscreen press kit and the Bigscreen Meta Quest store page',
        url: 'https://www.bigscreenvr.com/about',
    },
};

export default credits;
