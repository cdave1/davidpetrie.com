import React from 'react'
import '../css/assets/css/main.css'

module.exports = React.createClass({ 
    render() {
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

                {this.props.children()}

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

    },
})
