module.exports = {
    siteMetadata: {
        title: `David Petrie`,
        description: `David Petrie - Software Engineer`,
        siteUrl: `https://davidpetrie.com`,
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
