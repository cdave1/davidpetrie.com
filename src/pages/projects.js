import React from 'react';
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx';

// Everything from before the AI work: the projects with pictures (2009 to 2018), then the
// 2000 to 2009 list. kotari and Bigscreen are on /ai-projects/ (AI Projects).
export default function ProjectsPage({ archiveHtml }) {
    return (
        <Wrapper>
            <header className="page-head">
                <h1>Pre AI Projects</h1>
                <p>Products, startups and open source software from 2000 to 2018, newest first.</p>
                <p>
                    The work from 2009 to 2018 comes first, then <a className="text-link" href="#2000-2009">2000 to 2009</a>.
                    My <a className="text-link" href="https://github.com/cdave1">GitHub profile</a> has more
                    engineering projects.
                </p>
            </header>
            <Projects exclude={['kotari', 'Bigscreen']} />
            <section className="archive" id="2000-2009" aria-labelledby="archive-title">
                <header className="archive__head">
                    <h2 id="archive-title">2000 to 2009</h2>
                </header>
                <div className="grid doc">
                    <div className="prose doc__text" dangerouslySetInnerHTML={{ __html: archiveHtml }} />
                </div>
            </section>
        </Wrapper>
    );
}
