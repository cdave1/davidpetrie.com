import React from 'react';
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default function PageWrapper({ children }) {
    return (
        <div>
            <SiteHeader />
            <main className="site-container page-content">
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
