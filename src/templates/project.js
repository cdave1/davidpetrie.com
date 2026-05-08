import React from 'react';
import ProjectPage from '../components/ProjectPage.jsx';
import Seo from '../components/Seo.jsx';

export default function ProjectTemplate({ pageContext }) {
    return <ProjectPage project={pageContext.project} />;
}

export const Head = ({ pageContext }) => (
    <Seo
        title={pageContext.project.title}
        description={pageContext.project.description}
    />
);
