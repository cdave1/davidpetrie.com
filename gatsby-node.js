const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

// NOTE: copied and pasted from https://github.com/noahg/gatsby-starter-blog-no-styles/tree/master/src/pages
// I have no idea why it is so damn complex to convert markdown to react in the
// latest version of gatbsy when it was so easy and seamless in previous versions.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const defaultTemplate = path.resolve("./src/templates/default.js")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: defaultTemplate,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}