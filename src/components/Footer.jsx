import React from 'react';

class SiteFooter extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="site-footer-inner">
                    <ul className="footer-links">
                        <li><a href="/about/">About</a></li>
                        <li><a href="/projects/">Projects</a></li>
                        <li><a href="/reading/">Reading</a></li>
                        <li><a href="/contact/">Contact</a></li>
                    </ul>
                    <p>&copy; David Petrie {new Date().getFullYear()}</p>
                </div>
            </footer>
        );
    }
}

export default SiteFooter;
