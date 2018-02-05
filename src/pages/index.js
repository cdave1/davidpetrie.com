import React from 'react'
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects.jsx'

import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Divider, Checkbox } from 'semantic-ui-react'

exports.data = {
  title: 'Recent Work'
};


export default class Index extends React.Component {
    constructor () {
        super()
        this.state = {
            title: ""
        };
    }

    render () {
        return (
            <Wrapper title="Recent Work">
                <Grid columns="equal">
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>
                        <Projects />
                    </Grid.Column>
                </Grid>
            </Wrapper>
        )
    }
}
