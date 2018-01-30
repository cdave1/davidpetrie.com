import React from 'react'
import get from 'lodash/get'

import PageWrapper from '../Components/Wrapper.jsx';

import { Container, Segment, Header, Image, Icon, Divider, Label } from 'semantic-ui-react'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageWrapper title={`${post.frontmatter.title} | ${siteTitle}`}>
        <Segment basic>
        <div className='blogText' dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />
        <Label>{post.frontmatter.date}</Label>
        </Segment>
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