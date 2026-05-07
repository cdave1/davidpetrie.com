import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteHeader from '../components/Header';
import SiteFooter from '../components/Footer';

import '../styles/global.css';

const TemplateWrapper = ({ children }) =>
    <div>
        <Helmet
            title="David Petrie - New Zealand based Software Engineer"
            meta={[
                { name: 'description', content: 'David Petrie - Software Engineer' },
                { name: 'keywords', content: 'software engineer, developer, projects' },
            ]}
        >
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
            <script>{`(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`}</script>
        </Helmet>
        <div>
            {children()}
        </div>
    </div>

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
