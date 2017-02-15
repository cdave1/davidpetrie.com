import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
import { config } from 'config'
import { Container } from 'react-responsive-grid'
import Projects from './Projects.jsx'

exports.data = {
  title: 'Recent Work'
};


export default class Index extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
              <Helmet
                title={config.siteTitle}
                meta={[
                  {"name": "description", "content": "David Petrie"},
                  {"name": "keywords", "content": "sample, something"},
                ]}
              />
              <Projects />
            </div>
        )
    }
}
