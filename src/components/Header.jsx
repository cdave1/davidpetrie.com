import React from 'react';

import { Container, Menu, Segment, Image, Button, Divider } from 'semantic-ui-react'

import logo from '../images/logo2.svg';

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartCount: 0
        };
    }

    componentDidMount() {
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.dispatch(logout());
    }
/*
    <li><a href="https://github.com/cdave1">Github</a></li>
    <li><a href="https://twitter.com/davidcpetrie">Twitter</a></li>
    <li><a href="https://medium.com/@david.petrie">Medium</a></li>
*/

    render() {
        return (
            <Container fluid>
                <Container>
                <Divider fitted hidden />
                        <Menu secondary>
                            <Menu.Item href='/'><Image centered height='40px' src={logo} /></Menu.Item>
                            <Menu.Menu secondary position='right'>
                                <Menu.Item name='About' href='/about/' />
                                <Menu.Item name='Projects' href='/projects/' />
                                <Menu.Item name='Consulting' href='/consulting/' />
                                <Menu.Item name='Reading' href='/reading/' />
                                <Menu.Item fitted><Button basic color='blue' href='/consulting/' content="Consulting" /></Menu.Item>
                            </Menu.Menu>
                        </Menu>
                </Container>
                <Divider />
                <Divider hidden />
            </Container>
        );
    }
}

export default SiteHeader;
