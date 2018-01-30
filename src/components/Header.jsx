import React from 'react';

import { Container } from 'semantic-ui-react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'

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
  <Menu secondary inverted={true}>
                    <Menu.Item href='/'></Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='ABOUT' href='/about/' />
                        <Menu.Item href={`${process.env.APP_URL}/login/`} name="LOG IN" />
                        <Menu.Item fitted><Button basic color='blue' href='/pricing/' content="START FREE TRIAL" /></Menu.Item>
                    </Menu.Menu>
                </Menu>


                                <li><a href="https://github.com/cdave1">Github</a></li>
                                <li><a href="https://twitter.com/davidcpetrie">Twitter</a></li>
                                <li><a href="https://medium.com/@david.petrie">Medium</a></li>
                */

  render() {
    return (
        <Container>
            <Segment basic clearing textAlign="center">
            
            <Menu secondary position='right'>
            <Menu.Item href='/'><Image centered height='60px' style={{padding: '10px'}} src={logo} /></Menu.Item>
                <Menu.Item name='About' href='/about/' />
                <Menu.Item name='Projects' href='/projects/' />
                <Menu.Item name='Consulting' href='/consulting/' />
                <Menu.Item name='Reading' href='/reading/' />
                <Menu.Item fitted><Button basic color='blue' href='/consulting/' content="Consulting" /></Menu.Item>
            </Menu>
            </Segment>
        </Container>
        );
    }
}

export default SiteHeader;
