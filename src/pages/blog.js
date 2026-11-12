import React from 'react';
import PageWrapper from '../components/Wrapper';

// The list of blog posts, newest first.
export default function Blog({ posts }) {
    return (
        <PageWrapper>
            <header className="page-head">
                <h1 data-rise>Blog</h1>
            </header>
            <div className="grid">
                <ul className="posts" data-rise style={{ '--i': 1 }}>
                    {posts.map((post) => (
                        <li key={post.path}>
                            <a href={post.path}>{post.title}</a>
                            {post.date && <time>{post.date}</time>}
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    );
}
