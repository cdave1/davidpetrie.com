import React from 'react';

export default function Seo({ title, description }) {
    const fullTitle = title
        ? `${title} | David Petrie`
        : 'David Petrie - New Zealand based Software Engineer';

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={description || 'David Petrie - Software Engineer'} />
            <meta name="keywords" content="software engineer, developer, projects" />
        </>
    );
}
