import React from 'react'
import HomeWrapper from '../components/HomeWrapper';

export default class Index extends React.Component {
    render() {
        return (
            <HomeWrapper title="David Petrie">
                <div className="site-container page-content">
                    <section className="home-intro">
                        <p>
                            I'm David Petrie. I like building tools that let people create things
                            they couldn't before — usually at the intersection of software, design, and automation.
                            I'm based in Wellington, New Zealand. Previously I went
                            through <a href="http://ycombinator.com">Y Combinator</a> (W14),
                            built hardware at iCracked in San Francisco, and co-founded
                            a <a href="/project/playcomo">mobile games company</a>.
                        </p>
                    </section>

                    <section className="home-section">
                        <h2>Now</h2>
                        <p>
                            Working on <a href="https://dreamengine.co">DreamEngine</a> — exploring
                            how algorithms can generate 2D and 3D artwork at scale. Right now I'm deep
                            in procedural generation and figuring out what it means to build creative
                            tools in a world where AI can do most of the heavy lifting. Also reading
                            a lot about simulation and the <a href="/reading/">books on my list</a>.
                        </p>
                    </section>

                    <section className="home-section">
                        <h2>Interests</h2>
                        <ul className="home-interests">
                            <li>Automation &amp; procedural generation — software that radically increases productivity</li>
                            <li>Simulation — cities, traffic flow, testing configurations</li>
                            <li><a href="/project/algorithmic_design_engine">Generative art</a> &amp; <a href="/project/difont">typography</a></li>
                            <li>Real-time 3D graphics &amp; <a href="/project/cdk_game_engine">game engines</a></li>
                            <li>History — late antiquity, decline of the Roman Empire</li>
                            <li>Cell biology — whether eukaryotes are unique to earth</li>
                            <li>Machine learning — GANs, genetic programming</li>
                        </ul>
                    </section>

                    <section className="home-section">
                        <h2>Selected Projects</h2>
                        <ul className="home-projects">
                            <li><a href="/project/dream_engine">Dream Engine</a> — marketplace for software automation tools, starting with algorithmic design</li>
                            <li><a href="/project/ocean">Ocean</a> — a pocket-sized Linux web server; featured on Product Hunt, ZDNet, TNW, and Slashgear</li>
                            <li><a href="/project/vast">Vast</a> — build 3D objects and environments directly in VR</li>
                            <li><a href="/project/playcomo">PlayCoMo</a> — mobile game studio shipping iOS and Android games to millions of players</li>
                            <li><a href="/project/ftgles">FTGLES</a> — open source OpenGL font rendering library for iOS and Android</li>
                        </ul>
                        <p><a href="/projects">View all projects →</a></p>
                    </section>

                    <section className="home-section">
                        <h2>Press</h2>
                        <ul className="home-projects">
                            <li><a href="https://www.producthunt.com/posts/ocean-2">Product Hunt</a> — Ocean launch</li>
                            <li><a href="http://www.zdnet.com/article/ocean-the-linux-web-server-that-fits-in-your-pocket/">ZDNet</a> — "Ocean: the Linux web server that fits in your pocket"</li>
                            <li><a href="http://thenextweb.com/insider/2016/01/15/ocean-is-an-amazing-battery-powered-wireless-server-that-fits-in-your-pocket/">The Next Web</a> — "Ocean is an amazing battery-powered wireless server"</li>
                            <li><a href="http://www.slashgear.com/ocean-is-a-phone-size-linux-server-that-runs-on-batteries-15423305/">SlashGear</a> — "Ocean is a phone-size Linux server that runs on batteries"</li>
                        </ul>
                    </section>

                    <section className="home-section">
                        <h2>Writing &amp; Reading</h2>
                        <p>
                            I occasionally write on <a href="https://medium.com/@david.petrie">Medium</a>.
                            I also keep a curated <a href="/reading/">reading list</a>.
                        </p>
                    </section>

                    <section className="home-section">
                        <h2>Elsewhere</h2>
                        <ul className="home-links">
                            <li><a href="https://github.com/cdave1">GitHub</a></li>
                            <li><a href="https://twitter.com/davidcpetrie">Twitter</a></li>
                            <li><a href="https://medium.com/@david.petrie">Medium</a></li>
                            <li><a href="mailto:me@davidpetrie.com">Email</a></li>
                        </ul>
                    </section>
                </div>
            </HomeWrapper>
        )
    }
}
