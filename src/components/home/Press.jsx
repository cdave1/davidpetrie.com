import React from 'react';

// Ocean's press, in a sentence. The full list of articles is on the About page.
export default function Press() {
    return (
        <section className="press" aria-label="Press">
            <p className="press__note" data-reveal>
                Ocean, the pocket Linux server I led at iCracked, was written up by ZDNet, The Next Web,
                SlashGear, heise online, Product Hunt and others. Before it: Y Combinator, Winter 2014.
                After it: a US patent.
            </p>
        </section>
    );
}
