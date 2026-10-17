import React from 'react';
import HomeWrapper from '../components/HomeWrapper';
import Hero from '../components/home/Hero';
import Now from '../components/home/Now';
import Bigscreen from '../components/home/Bigscreen';
import ProjectIndex from '../components/home/ProjectIndex';
import Press from '../components/home/Press';
import Thinking from '../components/home/Thinking';
import Contact from '../components/home/Contact';
import credits from '../data/credits';

// The selection from the live home page; everything else is on /projects/.
const selected = ['Dream Engine', 'Vast', 'Ocean', 'PlayCoMo', 'FTGLES'];
const frames = { Vast: 'Vast00004.png', Ocean: 'img_0526.jpg', FTGLES: 'unicode.png' };

export default function Index() {
    return (
        <HomeWrapper credits={[credits.bigscreen, credits.plan, credits.solidus, credits.haeckel, credits.eakins, credits.cableCar]}>
            <Hero />
            <Now />
            <Bigscreen />
            <ProjectIndex titles={selected} frames={frames} heading="Before Bigscreen" id="before">
                <p className="index__more">
                    <a className="text-link" href="/projects/">All projects</a>
                    <a className="text-link" href="/projects/archive/">Older work, 2000 to 2009</a>
                </p>
            </ProjectIndex>
            <Press />
            <Thinking />
            <Contact />
        </HomeWrapper>
    );
}
