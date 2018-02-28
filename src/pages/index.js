import React from 'react'
import HomeWrapper from '../components/HomeWrapper';
import ProjectPreview from '../components/ProjectPreview.jsx'
import ProjectTable from '../components/ProjectTable.jsx'
const ReactMarkdown = require('react-markdown');

import { Timeline } from 'react-twitter-widgets';
import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'

exports.data = {
  title: 'Recent Work'
};

const introText = `
# Welcome!

I'm David Petrie, founder of [Dream Engine](/project/dream_engine).  I'm interested in all things startups and technology, and I've co-founded companies both in New Zealand and Silicon Valley.  I'm also an alumni of Y Combinator.

* [My Bio](/about/)

* I might be [available for hire](/consulting/)

* Books I'm [currently reading](/reading/)

`;

export default class Index extends React.Component {
    constructor () {
        super()
        this.state = {
            title: ""
        };
    }
    /*

                <div className="blogText">
                    <ReactMarkdown source={introText} />
                </div>
    */

    render () {
        return (
            <HomeWrapper title="David Petrie">
                <ProjectTable />
            </HomeWrapper>
        )
    }
}
