import React from 'react';
import HomeWrapper from '../components/HomeWrapper';
import Hero from '../components/home/Hero';
import Now from '../components/home/Now';
import Bigscreen from '../components/home/Bigscreen';
import ProjectIndex from '../components/home/ProjectIndex';
import Press from '../components/home/Press';
import Contact from '../components/home/Contact';
import credits from '../data/credits';

// Two earlier projects; everything else is on /projects/ (Pre AI Projects).
const selected = ['Dream Engine', 'Ocean'];
const frames = { Ocean: 'oceanhw00007.png' };

// `hero` swaps the first screen (the lab tries other layouts); the site uses the default.
export default function Index({ hero }) {
    return (
        <HomeWrapper credits={[credits.bigscreen, credits.cableCar]}>
            {hero || <Hero />}
            <Now />
            <Bigscreen />
            <ProjectIndex titles={selected} frames={frames} heading="Before Bigscreen" id="before">
                <p className="index__more">
                    <a className="text-link" href="/projects/">All the pre AI projects, 2000 to 2018</a>
                </p>
            </ProjectIndex>
            <Press />
            <Contact />
        </HomeWrapper>
    );
}
