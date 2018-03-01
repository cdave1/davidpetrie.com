import React from 'react'
import { Container } from 'semantic-ui-react'
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default class HomeWrapper extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <SiteHeader />
                <div>
                    {this.props.children}
                </div>
                <SiteFooter />
            </div>
        )
    }
}
