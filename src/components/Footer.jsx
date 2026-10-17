import React from 'react';

export default function SiteFooter({ credits = [], short = false }) {
    return (
        <footer className={'site-footer' + (short ? ' site-footer--short' : '')} id="site-footer">
            <div className="grid site-footer__top">
                <ul className="site-footer__links" aria-label="Pages">
                    <li><a href="/ai-projects/">AI Projects</a></li>
                    <li><a href="/projects/">Pre AI Projects</a></li>
                    <li><a href="/about/">About</a></li>
                </ul>
            </div>
            <div className="site-footer__legal">
                <p>&copy; David Petrie {new Date().getFullYear()}</p>
                {credits.length > 0 && (
                    <p>
                        Pictures and footage not my own:{' '}
                        {credits.map((c, i) => (
                            <React.Fragment key={c.url}>
                                <a href={c.url}>“{c.title}”</a> by {c.creator}, <a href={c.licenceUrl}>{c.licence}</a>, via {c.source}
                                {i < credits.length - 1 ? '; ' : '.'}
                            </React.Fragment>
                        ))}
                    </p>
                )}
            </div>
            <p className="site-footer__mark" aria-hidden="true">David Petrie</p>
        </footer>
    );
}
