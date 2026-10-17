import React from 'react';
import PageWrapper from '../components/Wrapper.jsx';
import rails from '../data/rails';

// The markdown pages open with their own "# Title"; lift it out so it can be set as the page title.
const splitTitle = (html, fallback) => {
    const match = html.match(/^\s*<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (!match) return { title: fallback, body: html };
    return { title: match[1].replace(/<[^>]+>/g, ''), body: html.slice(match[0].length) };
};

function Rail({ rail }) {
    return (
        <aside className="doc__rail" aria-label="Pictures">
            {rail.video && (
                <figure data-reveal style={{ '--i': 0 }}>
                    <video autoPlay muted loop playsInline preload="metadata" poster={rail.video.poster} width="854" height="480" aria-hidden="true">
                        <source src={rail.video.src} type="video/webm" />
                    </video>
                    <figcaption className="caption">{rail.video.caption}</figcaption>
                </figure>
            )}
            {rail.pictures.map((picture, i) => (
                <figure key={picture.src} data-reveal style={{ "--i": i % 3 }}>
                    <img src={picture.src} width={picture.w} height={picture.h} alt={picture.alt} loading={i < 2 ? undefined : 'lazy'} style={picture.ratio ? { aspectRatio: picture.ratio } : undefined} />
                    <figcaption className="caption">{picture.caption}</figcaption>
                </figure>
            ))}
        </aside>
    );
}

// A page written in markdown (src/pages/*.md), with its margin pictures if it has any.
export default function MarkdownPage({ html, title: fallback, path, date }) {
    const { title, body } = splitTitle(html, fallback);
    const rail = rails[path];

    return (
        <PageWrapper credits={rail && rail.credits}>
            <article>
                <header className="page-head">
                    <h1 data-rise>{title}</h1>
                </header>
                <div className={'grid doc' + (rail ? ' doc--rail' : '')}>
                    <div className="prose doc__text" data-rise style={{ '--i': 1 }} dangerouslySetInnerHTML={{ __html: body }} />
                    {rail && <Rail rail={rail} />}
                    {date && (
                        <p className="prose-date doc__date">
                            Written <time>{date}</time>
                        </p>
                    )}
                </div>
            </article>
        </PageWrapper>
    );
}
