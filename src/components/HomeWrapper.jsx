import React from 'react'
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default class HomeWrapper extends React.Component {
    render() {
        return (
            <div>
                <SiteHeader />
                <main>
                    {this.props.children}
                </main>
                <SiteFooter />
            </div>
        )
    }
}
