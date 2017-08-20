import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

export default class Wrapper extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="wrapper style2">
                <div className="title">{this.props.title}</div>
                <div id="main" className="container">
                    <div id="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
