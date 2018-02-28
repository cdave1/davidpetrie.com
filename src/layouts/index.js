import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import SiteHeader from '../Components/Header';
import SiteFooter from '../Components/Footer';
import { Container } from 'semantic-ui-react';

//

const TemplateWrapper = ({ children }) =>
    <div>
        <Helmet
            title="David Petrie - New Zealand based Software Engineer"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        >
            
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900' />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" /> 
            <link rel='stylesheet' href={__PATH_PREFIX__ + '/main.css'} />
            
            
        </Helmet>
        <div>
        {children()}
        </div>
    </div>

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
