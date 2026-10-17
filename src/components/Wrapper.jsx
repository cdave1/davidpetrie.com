import React from 'react';
import SiteHeader from './Header';
import SiteFooter from './Footer';

export default function PageWrapper({ children, credits }) {
    return (
        <>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter credits={credits} short />
        </>
    );
}
