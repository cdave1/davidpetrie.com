import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { config } from 'config'
import '../css/assets/css/main'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
    propTypes() {
        return {
            route: React.PropTypes.object,
            children: React.PropTypes.any,
        }
    },
    render() {
        const RENDER_GATSBY_BOILERPLATE = false;

        if (RENDER_GATSBY_BOILERPLATE) {
            return (
                <div>
                    <Headroom
                        wrapperStyle={{
                            marginBottom: rhythm(1),
                        }}
                        style={{
                            background: 'lightgray',
                        }}
                    >
                        <Container
                            style={{
                                maxWidth: 960,
                                paddingTop: 0,
                                padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                            }}
                        >
                            <Link
                                to={prefixLink('/')}
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                Gatsby!!!
                            </Link>
                        </Container>
                    </Headroom>
                    <Container
                        style={{
                            maxWidth: 960,
                            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                            paddingTop: 0,
                        }}
                    >
                        {this.props.children}
                    </Container>
                </div>
            )
        } else {
            const page = this.props.routes[this.props.routes.length - 1].page;

            var content = (
                <div />
            );
            if (page.data && page.data.title) {
                content = (
                    <div className="wrapper style3">
                        <div className="title">{page.data.title}</div>
                        <div id="main" className="container">
                            <div id="content">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                );
            } else {
                content = (
                    <div>
                    {this.props.children}
                    </div>
                );
            }

            return (
                <div id="page-wrapper">
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            <div id="logo">
                                <h1><a href="index.html">David Petrie</a></h1>
                            </div>

                            <nav id="nav">
                                <ul>
                                    <li className="current"><a href="/">Home</a></li>
                                    <li><a href="/blog/">Blog</a></li>
                                    <li><a href="/about/">About</a></li>
                                    <li><a href="/projects/">Projects</a></li>
                                    <li><a href="/reading/">Reading</a></li>
                                    <li><a href="/contact/">Contact</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                    {content}

                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">The Rest Of It</div>
                        <div id="footer" class="container">
                            <header className="style1">
                                <h2>Ipsum sapien elementum portitor?</h2>
                                <p>
                                    Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
                                    Nam pharetra laoreet imperdiet volutpat etiam consequat feugiat.
							</p>
                            </header>
                            <hr />
                            <div className="row 150%">
                                <div className="6u 12u(mobile)">
                                    <section>
                                        <form method="post" action="#">
                                            <div className="row 50%">
                                                <div className="6u 12u(mobile)">
                                                    <input type="text" name="name" id="contact-name" placeholder="Name" />
                                                </div>
                                                <div className="6u 12u(mobile)">
                                                    <input type="text" name="email" id="contact-email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row 50%">
                                                <div className="12u">
                                                    <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="12u">
                                                    <ul className="actions">
                                                        <li><input type="submit" className="style1" value="Send" /></li>
                                                        <li><input type="reset" class="style2" value="Reset" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </section>

                                </div>
                                <div className="6u 12u(mobile)">
                                    <section className="feature-list small">
                                        <div className="row">
                                            <div className="6u 12u(mobile)">
                                                <section>
                                                    <h3 className="icon fa-home">Mailing Address</h3>
                                                    <p>
                                                        Untitled Corporation<br />
                                                        1234 Somewhere Rd #987<br />
                                                        Nashville, TN 00000-0000
													</p>
                                                </section>
                                            </div>
                                            <div className="6u 12u(mobile)">
                                                <section>
                                                    <h3 className="icon fa-comment">Social</h3>
                                                    <p>
                                                        <a href="#">@untitled-corp</a><br />
                                                        <a href="#">linkedin.com/untitled</a><br />
                                                        <a href="#">facebook.com/untitled</a>
                                                    </p>
                                                </section>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="6u 12u(mobile)">
                                                <section>
                                                    <h3 className="icon fa-envelope">Email</h3>
                                                    <p>
                                                        <a href="#">info@untitled.tld</a>
                                                    </p>
                                                </section>
                                            </div>
                                            <div className="6u 12u(mobile)">
                                                <section>
                                                    <h3 className="icon fa-phone">Phone</h3>
                                                    <p>
                                                        (000) 555-0000
													</p>
                                                </section>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            )
        }

    },
})
