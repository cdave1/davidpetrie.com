import React from 'react';
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx';

export default function ProjectsPage() {
    return (
        <Wrapper>
            <header className="page-head">
                <h1>Projects</h1>
                <p>
                    Products, startups and open source software I have made since 2009, newest first.
                </p>
                <p>
                    Older work, from 2000 to 2009, is in <a className="text-link" href="/projects/archive/">the archive</a>.
                    My <a className="text-link" href="https://github.com/cdave1">GitHub profile</a> has more
                    engineering projects.
                </p>
            </header>
            <Projects />
        </Wrapper>
    );
}
