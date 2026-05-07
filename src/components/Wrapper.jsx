import React from 'react'
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default class PageWrapper extends React.Component {
    render() {
        return (
            <div>
                <SiteHeader />
                <main className="site-container page-content">
                    {this.props.children}
                </main>
                <SiteFooter />
            </div>
        )
    }
}
