import React from 'react';

import logo from '../images/logo2a.svg'; 

import { Segment, Header, Grid, Image, Container, Divider, List } from 'semantic-ui-react'


/*
<Grid stackable inverted divided>
                        <Grid.Column width={3} textAlign="center">
                            <Header inverted as="h4">Product</Header>
                            <List link inverted>
                                <List.Item href="/features">Features</List.Item>
                                <List.Item href="/examples">Design Examples</List.Item>
                                <List.Item href="/faq">Q+A</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="center">
                            <Header inverted as="h4">Company</Header>
                            <List link inverted>
                                <List.Item href="/about">About Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h4">Contact</Header>
                            <List link inverted>
                                <List.Header href="/pricing">Try it out!</List.Header>
                                <List.Item href="/contact">Ask a question</List.Item>
                                
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header inverted as="h4">GigaDraw</Header>
                            <p>GigaDraw provides powerful design augmentation tools so you can quickly solve your clients design problems.</p>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    */


class SiteFooter extends React.Component {
    render() {
        return (
            <Segment basic padded='very' inverted className="footer" style={{'marginTop': 0, 'backgroundColor': '#212121'}}>
                <Container textAlign="center">
                    <Image centered height='120px' src={logo} />
                    <Divider hidden />
                    <Grid stackable inverted divided>
                        <Grid.Column width={16}  textAlign="center">
                            <p>&copy; DreamEngine Ltd.</p>
                            <p>28 Waterloo Quay, Wellington, New Zealand</p>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default SiteFooter;
