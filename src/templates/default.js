import React from 'react';
import { graphql } from 'gatsby';

import PageWrapper from '../components/Wrapper.jsx';
import Seo from '../components/Seo.jsx';

export default function BlogPostTemplate({ data }) {
    const post = data.markdownRemark;

    return (
        <PageWrapper>
            <article className="markdown-content">
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <time>{post.frontmatter.date}</time>
            </article>
        </PageWrapper>
    );
}

export const Head = ({ data }) => (
    <Seo title={data.markdownRemark.frontmatter.title} />
);

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
