import React from 'react';
import PageWrapper from '../components/Wrapper';
import ProjectIndex from '../components/home/ProjectIndex';

export default function NotFound() {
    return (
        <PageWrapper>
            <header className="page-head lost">
                <h1 data-rise>Nothing here</h1>
                <p data-rise style={{ '--i': 1 }}>
                    This page has moved or never existed. Everything I have made is listed below, or go
                    back to <a className="text-link" href="/">the home page</a>.
                </p>
            </header>
            <ProjectIndex />
        </PageWrapper>
    );
}
