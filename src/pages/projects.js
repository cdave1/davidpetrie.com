import React from 'react'
import { Link } from 'react-router'
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx'

export default class ProjectPage extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <Wrapper title="Projects">
                <div>
                <h1>Projects (2010 onwards)</h1>
                <p><a href="/projects/archive/">My 2000-2010 project archive</a></p>

                <p>My <a href="http://github.com/cdave1">github profile</a> has become something of a defacto project log now.</p>
                <Projects />
                </div>
            </Wrapper>
        )
    }
}
