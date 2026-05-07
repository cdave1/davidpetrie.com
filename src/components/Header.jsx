import React from 'react';

class SiteHeader extends React.Component {
    render() {
        return (
            <nav className="site-nav">
                <div className="site-nav-inner">
                    <a className="site-nav-name" href="/">David Petrie</a>
                    <ul className="site-nav-links">
                        <li><a href="/about/">About</a></li>
                        <li><a href="/projects/">Projects</a></li>
                        <li><a href="/reading/">Reading</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SiteHeader;
