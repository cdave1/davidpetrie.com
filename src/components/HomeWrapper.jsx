import React from 'react';
import SiteFooter from './Footer';

// The home page carries its own navigation inside the hero.
export default function HomeWrapper({ children, credits }) {
    return (
        <>
            <main>{children}</main>
            <SiteFooter credits={credits} />
        </>
    );
}
