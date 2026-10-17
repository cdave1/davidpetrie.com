import React from 'react';

export default function SiteHeader() {
    return (
        <header className="site-bar">
            <a className="site-bar__name" href="/" data-rise>David Petrie</a>
            <nav aria-label="Main">
                <ul className="site-bar__links">
                    <li data-rise style={{ '--i': 1 }}><a href="/ai-projects/">AI Projects</a></li>
                    <li data-rise style={{ '--i': 1 }}><a href="/projects/">Pre AI Projects</a></li>
                    <li data-rise style={{ '--i': 1 }}><a href="/about/">About</a></li>
                </ul>
            </nav>
        </header>
    );
}
