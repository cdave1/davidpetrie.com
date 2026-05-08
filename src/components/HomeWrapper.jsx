import React from 'react';
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default function HomeWrapper({ children }) {
    return (
        <div>
            <SiteHeader />
            <main>
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}
