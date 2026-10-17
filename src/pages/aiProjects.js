import React from 'react';
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx';

// The work from 2018 on: kotari and Bigscreen. Everything before it is on /projects/ (Pre AI Projects).
export default function AiProjectsPage() {
    return (
        <Wrapper>
            <header className="page-head">
                <h1>AI Projects</h1>
                <p>
                    From 2018 on. For the work from 2000 to 2018, see the{' '}
                    <a className="text-link" href="/projects/">pre AI projects</a>.
                </p>
            </header>
            <Projects only={['kotari', 'Bigscreen']} />
        </Wrapper>
    );
}
