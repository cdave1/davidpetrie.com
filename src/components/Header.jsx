import React from 'react';

import { Container, Menu, Segment, Image, Button, Divider } from 'semantic-ui-react'

import logo from '../images/logo_neue7.png';

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartCount: 0
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{'backgroundColor': '#3a3335', 'padding-top': '15px', 'padding-bottom': '15px'}}>
            <Container fluid>
                <Container>
                    <Menu inverted secondary stackable>
                        <Menu.Item href='/'><Image centered height='40px' src={logo} /></Menu.Item>
                        <Menu.Menu inverted secondary position='right'>
                            <Menu.Item name='About' href='/about/' />
                            <Menu.Item name='Projects' href='/projects/' />
                            <Menu.Item name='Reading' href='/reading/' />
                            <Menu.Item fitted><Button basic color='blue' href='/consulting/' content="Consulting" /></Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Container>
        </div>
        );
    }
}

export default SiteHeader;
