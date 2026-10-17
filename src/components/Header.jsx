import React from 'react';

export default function SiteHeader() {
    return (
        <header className="site-bar">
            <a className="site-bar__name" href="/" data-rise>David Petrie</a>
            <nav aria-label="Main">
                <ul className="site-bar__links">
                    <li data-rise style={{ '--i': 1 }}><a href="/projects/">Projects</a></li>
                    <li data-rise style={{ '--i': 1 }}><a href="/about/">About</a></li>
                    <li data-rise style={{ '--i': 1 }}><a href="/reading/">Reading</a></li>
                    <li data-rise style={{ '--i': 2 }}><a className="button" href="mailto:me@davidpetrie.com">Email me</a></li>
                </ul>
            </nav>
        </header>
    );
}
