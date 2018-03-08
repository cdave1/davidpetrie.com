import React from 'react'
import HomeWrapper from '../components/HomeWrapper';
import ProjectPreview from '../components/ProjectPreview.jsx'
import ProjectTable from '../components/ProjectTable.jsx'
const ReactMarkdown = require('react-markdown');

import { Timeline } from 'react-twitter-widgets';
import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'

export default class Index extends React.Component {
    constructor () {
        super()
        this.state = {
            title: ""
        };
    }

    render () {
        return (
            <HomeWrapper title="David Petrie">
                <Container className="introHeader">
                    <h1>
                    Hi there! I'm founder of <a href="https://dreamengine.co">Dream Engine</a>. This is my personal site, where you can find more information <a href="/about">about me</a> and my <a href="/projects">various projects</a>...
                    </h1>
                </Container>
                <ProjectTable />
            </HomeWrapper>
        )
    }
}
