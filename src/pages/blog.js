import React, { Component, useState, useEffect } from "react"
import { Link } from "gatsby"
import netlifyIdentity from "netlify-identity-widget"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Component needed for build and deploy
class NetlifyIdentity extends Component {
  // Only initialize widget after component mount
  componentDidMount() {
    netlifyIdentity.init();
  }
  render() {
    return(<></>);
  }
}

const BlogPage = ({ data }) => {
  const [state, setState] = useState();
  const user = netlifyIdentity.currentUser();
  // Get current login state
  useEffect(() => {
    user ? setState(true) : setState(false);
  }, [user]);
  // Login handler, sets the login state
  const handleClick = () => {
    netlifyIdentity.open();

    netlifyIdentity.on('login', user => {
      netlifyIdentity.close();
      setState(true);
    });

    netlifyIdentity.on('logout', user => {
      netlifyIdentity.close();
      setState(false);
    });
  }
  // HTML for the list of posts
  const postList = (
    data.allMarkdownRemark.edges.map(post => (
      <div
        key={post.node.id}
        className="post"
        style={{
          padding: '0.5rem',
          position: 'relative'
        }}
      >
        <Link
          to={post.node.frontmatter.path}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}>
        </Link>
        <h3 style={{ color: `#464cf0` }}>
          {post.node.frontmatter.title}
        </h3>
        <small>
          {post.node.frontmatter.date}
        </small>
        <p>
          {post.node.excerpt}
        </p>
        <small>
          by {post.node.frontmatter.author}
        </small>
      </div>
    ))
  );

  return (
    <Layout>
    <NetlifyIdentity />
      <SEO title="Blog" />
      <h1 style={{ position: 'relative' }}>
        Latest Posts
        <span
          style={{
            position: 'absolute',
            right: '0',
            cursor: 'pointer',
            color: `#464cf0`,
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            KhtmlUserSelect: 'none',
            WebkitUserSelect: 'none'
          }}
          onClick={handleClick}
        >
          {state ? 'Logout' : 'Login'}
        </span>
      </h1>
      <div style={{ marginTop: '1rem' }}>
        {state ? postList : null}
      </div>
    </Layout>
  )
}
// Query the list of posts
export const postsQuery = graphql`
  query PostsQuery{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
