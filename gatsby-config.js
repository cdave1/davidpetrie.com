module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`
    ],
}
