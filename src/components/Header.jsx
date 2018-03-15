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
            <div style={{'backgroundColor': '#212121', 'padding-top': '15px', 'padding-bottom': '15px'}}>
            <Container fluid>
                <Container>
                    <Menu inverted secondary stackable>
                        <Menu.Item href='/'><Image centered height='40px' src={logo} /></Menu.Item>
                        <Menu.Menu inverted secondary position='right'>
                            <Menu.Item name='About' href='/about/' />
                            <Menu.Item name='Projects' href='/projects/' />
                            <Menu.Item name='Reading' href='/reading/' />
                            <Menu.Item name="Consulting" href='/consulting/' />
                            <Menu.Item name='Contact' href='/contact/' />
                            <Menu.Item icon='twitter' href='https://www.twitter.com/davidcpetrie' />
                            <Menu.Item icon='github' href='https://github.com/cdave1' />
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Container>
        </div>
        );
    }
}

export default SiteHeader;
