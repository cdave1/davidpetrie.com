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
                <div className="wrapper style2">
                    <div className="title">{page.data.title}</div>
                    <div id="main" className="container">
                        <div id="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );

            return (
                <div id="page-wrapper">
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            <div id="logo">
                                <h1><a href="index.html">David Petrie</a></h1>
                                <p>I'm an entrepreneur and software engineer from New Zealand</p>
                            </div>

                            <nav id="nav">
                                <ul>
                                    <li className="current"><a href="/">Home</a></li>
                                    <li><a href="/blog/">Blog</a></li>
                                    <li><a href="/about/">About</a></li>
                                    <li><a href="/projects/">Projects</a></li>
                                    <li><a href="/reading/">Reading</a></li>
                                    <li><a href="https://github.com/cdave1">Github</a></li>
                                    <li><a href="https://twitter.com/davidcpetrie">Twitter</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                    {content}

                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">Contact</div>
                        <div id="footer" class="container">
                            <header className="style1">
                                <h2>Social Media</h2>
                                <p>
                                    Twitter: <a href="https://twitter.com/davidcpetrie">@davidcpetrie</a><br />
                                    Github: <a href="https://github.com/cdave1">github.com/cdave1</a><br />
                                    Facebook: <a href="https://www.facebook.com/david.petrie.nz">facebook.com/david.petrie.nz</a>
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            )
        }

    },
})
