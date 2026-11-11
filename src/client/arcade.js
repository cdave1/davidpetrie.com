// The home page's second script: the game that plays itself in the masthead. Kept apart from
// site.js so the other pages never load it. The page is complete without it.

import invaders from './invaders/index.js';

const masthead = document.querySelector('.masthead');
if (masthead) invaders(masthead);
