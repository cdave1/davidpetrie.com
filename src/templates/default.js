import React from 'react'
import get from 'lodash/get'

import PageWrapper from '../components/Wrapper.jsx';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageWrapper title={`${post.frontmatter.title} | ${siteTitle}`}>
        <article className="markdown-content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <time>{post.frontmatter.date}</time>
        </article>
      </PageWrapper>
    )
  }
}

export default BlogPostTemplate

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
`
