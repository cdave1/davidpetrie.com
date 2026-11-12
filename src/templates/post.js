import React from 'react';
import PageWrapper from '../components/Wrapper.jsx';

// A blog post (src/posts/). If it was written from a transcript, the page carries both: the
// essay alone by default, and with the switch on, each passage of the transcript beside the
// paragraphs it became. The switch is a checkbox the stylesheet reads, so it needs no script.
export default function PostPage({ post }) {
    const paired = post.pairs.some((pair) => pair.raw);

    return (
        <PageWrapper>
            <article className="post">
                <header className="page-head page-head--long">
                    <h1 data-rise>{post.title}</h1>
                    {(post.notes || post.site) && (
                        <p className="post__about" data-rise style={{ '--i': 1 }}>
                            {post.notes && <a className="text-link" href={post.notes}>{post.notesLabel || 'Project notes'}</a>}
                            {post.site && (
                                <a className="text-link" href={post.site} target="_blank" rel="noopener">
                                    {post.siteLabel || post.site.replace(/^https?:\/\//, '')}
                                    <svg className="post__out" viewBox="0 0 16 16" aria-hidden="true">
                                        <path d="M6.5 3H3v10h10V9.5M9.5 2.5h4v4M13.5 2.5 7.5 8.5" />
                                    </svg>
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            )}
                        </p>
                    )}
                </header>
                <div className="grid doc">
                    {(post.note || paired) && (
                        <div className="post__note" data-rise style={{ '--i': 1 }}>
                            {post.note && <div className="prose" dangerouslySetInnerHTML={{ __html: post.note }} />}
                            {paired && (
                                <p className="post__mode">
                                    <input className="post__switch sr-only" type="checkbox" id="transcript" />
                                    <label className="post__toggle" htmlFor="transcript">
                                        <span className="post__track" aria-hidden="true" />
                                        Show the raw transcript
                                    </label>
                                </p>
                            )}
                        </div>
                    )}
                    <div className="post__pairs" data-rise style={{ '--i': 2 }}>
                        {paired && (
                            <>
                                <p className="post__heads">
                                    <span>What I said</span>
                                    <span>What it became</span>
                                </p>
                                <p className="post__key">Shaded: what I said. Under each passage: what it became.</p>
                            </>
                        )}
                        {post.pairs.map((pair, i) => (
                            <div className={'pair' + (pair.essay ? '' : ' pair--cut')} key={i}>
                                {pair.raw && <div className="pair__raw" dangerouslySetInnerHTML={{ __html: pair.raw }} />}
                                {pair.essay ? (
                                    <div className="pair__essay prose" dangerouslySetInnerHTML={{ __html: pair.essay }} />
                                ) : (
                                    <p className="pair__essay pair__gone">Cut. None of this made it into the essay.</p>
                                )}
                            </div>
                        ))}
                    </div>
                    {post.date && (
                        <p className="prose-date doc__date">
                            Written <time>{post.date}</time>
                        </p>
                    )}
                </div>
            </article>
        </PageWrapper>
    );
}
