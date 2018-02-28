import React from 'react';

import logo from '../images/logo_neue6.png'; 

import { Segment, Header, Grid, Image, Container, Divider, List, Menu } from 'semantic-ui-react'

class SiteFooter extends React.Component {
    render() {
        return (
            <Segment basic padded='very' inverted className="footer" style={{'marginTop': 0, 'backgroundColor': '#212121'}}>
                <Container textAlign="center">
                    <Image centered height='60px' src={logo} />
                    <Divider hidden />
                    <List horizontal inverted padded>
                        <List.Item name='About' href='/about/'>About</List.Item>
                        <List.Item name='Projects' href='/projects/'>Projects</List.Item>
                        <List.Item name='Reading' href='/reading/'>Reading</List.Item>
                        <List.Item name='Consulting' href='/consulting/'>Consulting</List.Item>
                    </List>
                    <Divider hidden />
                    <p>&copy; David Petrie 2018</p>
                </Container>
            </Segment>
        );
    }
}

export default SiteFooter;
