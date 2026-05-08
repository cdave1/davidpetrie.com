const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        React.createElement('link', {
            key: 'font-preconnect-1',
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        }),
        React.createElement('link', {
            key: 'font-preconnect-2',
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous',
        }),
        React.createElement('link', {
            key: 'font-stylesheet',
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap',
        }),
        React.createElement('script', {
            key: 'dark-mode',
            dangerouslySetInnerHTML: {
                __html: `(function(){try{if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})();`,
            },
        }),
    ]);
};
