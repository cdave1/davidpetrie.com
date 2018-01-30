import React from 'react';

import { Container } from 'semantic-ui-react'
import { Step, Grid, Menu, Segment, Header, Image, Icon, Card } from 'semantic-ui-react'
import { Button, Form, TextArea, Label } from 'semantic-ui-react'

export default class Index extends React.Component {
    constructor () {
        super()
    }

    render() {
        return (
            <Container ui>
                <Segment inverted basic textAlign="center" className="ui masthead">
                    <Header ui as="h1" style={{fontWeight: 700}}>404 - Page Not Found</Header>
                </Segment>
            </Container>
        );
    }
}
