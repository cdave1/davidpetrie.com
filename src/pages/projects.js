import React from 'react'
import { Link } from 'react-router'
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx'
import { List } from 'semantic-ui-react'

export default class ProjectPage extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <Wrapper title="Projects">
                <div className="blogText">
                <h1>Projects</h1>
                <p><a href="/projects/archive/">Older (pre 2010) projects can be found here</a></p>

                <p>This is a selected portfolio of interesting products, startups, and open source software, that I've created over the last decade.   My <a href="http://github.com/cdave1">github profile</a> also has additional software and engineering projects on it.</p>
                <Projects />
                </div>
            </Wrapper>
        )
    }
}
