/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          position: `relative`,
          minHeight: `100vh`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1rem 3rem 1rem`,
            position: `relative`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            position: `absolute`,
            bottom: 0,
            width: `100%`,
            height: `3rem`,
            lineHeight: `3rem`,
            padding: `0 1rem`,
            textAlign: `center`,
            background: `#333`,
            color: `#ddd`,
          }}
        >
          © {new Date().getFullYear()}, Above Solutions
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
