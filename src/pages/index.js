import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
import { Container } from 'react-responsive-grid'
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx'

exports.data = {
  title: 'Recent Work'
};


export default class Index extends React.Component {
    constructor () {
        super()
        this.state = {
            title: "hello"
        };
    }

    render () {
        return (
            <Wrapper title="Recent Work">
              <Projects />
            </Wrapper>
        )
    }
}
