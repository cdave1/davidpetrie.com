import React from 'react';

const names = [
    'ZDNet', 'The Next Web', 'SlashGear', 'heise online', 'IBTimes', 'derStandard', 'Xataka',
    'Computer Hoy', 'Geeky Gadgets', 'LinuxGizmos', 'Cool Things', 'BetaList', 'Product Hunt',
];

export default function Press() {
    return (
        <section className="press" aria-label="Press">
            <div className="press__band">
                <ul className="press__track">
                    {names.map((name) => <li key={name}>{name}</li>)}
                    {names.map((name) => <li key={name + '-again'} aria-hidden="true">{name}</li>)}
                </ul>
            </div>
            <p className="press__note" data-reveal>
                Ocean, the pocket Linux server I led at iCracked, was written up by every one of these.
                Before it: Y Combinator, Winter 2014. After it: a US patent.
            </p>
        </section>
    );
}
