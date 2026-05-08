const path = require('path');
const projectData = require('./src/data/projects.json');

const sanitize = (s) => s.replace(/[^a-z0-9]/gi, '_').toLowerCase();

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const defaultTemplate = path.resolve('./src/templates/default.js');
    const projectTemplate = path.resolve('./src/templates/project.js');

    const result = await graphql(`
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
    `);

    if (result.errors) {
        throw result.errors;
    }

    for (const edge of result.data.allMarkdownRemark.edges) {
        createPage({
            path: edge.node.frontmatter.path,
            component: defaultTemplate,
            context: {},
        });
    }

    for (const project of projectData.projects) {
        console.log('Create page for', project.title);
        createPage({
            path: '/project/' + sanitize(project.title),
            component: projectTemplate,
            context: { project },
        });
    }
};
