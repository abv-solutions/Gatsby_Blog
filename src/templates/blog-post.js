import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <small>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
      </div>
    </Layout>

  )
}
// Query the post by path
export const postQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Template
