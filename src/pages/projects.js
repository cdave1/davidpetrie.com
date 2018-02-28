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
                <h1>Projects (2009 - present)</h1>
                <p><a href="/projects/archive/">My 2000-2009 project archive</a></p>

                <p>This is a selected list of what I think are the most interesting projects I've worked on since 2009.  My <a href="http://github.com/cdave1">github profile</a> has more stuff on it.</p>
                <Projects />
                </div>
            </Wrapper>
        )
    }
}
