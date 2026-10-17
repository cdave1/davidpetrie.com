import React from 'react';

export default function Contact() {
    return (
        <section className="contact" id="contact" aria-labelledby="contact-title">
            <video
                className="contact__media"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/found/wellington-cable-car-2020-05-17-poster.jpg"
                width="854"
                height="480"
                aria-hidden="true"
            >
                <source src="/found/wellington-cable-car-2020-05-17.webm" type="video/webm" />
            </video>
            <div className="contact__card" data-reveal>
                <h2 id="contact-title">Socials</h2>
                <ul className="contact__rows">
                    <li><span>Email</span><a href="mailto:me@davidpetrie.com">me@davidpetrie.com</a></li>
                    <li><span>GitHub</span><a href="https://github.com/cdave1">cdave1</a></li>
                    <li><span>Twitter</span><a href="https://twitter.com/davidcpetrie">@davidcpetrie</a></li>
                </ul>
                <address>
                    Wellington,<br />New Zealand
                </address>
            </div>
            <p className="contact__credit">The Wellington Cable Car, filmed by Tom Ackroyd</p>
        </section>
    );
}
