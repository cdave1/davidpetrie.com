import React from 'react';

import { Container, Segment, Header, Image, Icon, Divider } from 'semantic-ui-react'

class title extends React.Component {
    render() {
        return (
            <Container fluid style={{'backgroundColor':'#E6E6E6'}}>
                <Container>
                    <Segment padded="very" basic textAlign="center">
                        {this.props.subtitle && <Header as="h4">{this.props.subtitle}</Header>}
                        {this.props.title && <Header as="h1">{this.props.title}</Header>}
                    </Segment>
                </Container>
            </Container>
        );
    }
}

export default title;
