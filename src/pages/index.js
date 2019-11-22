import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my blog!</h1>
    <div style={{ margin: `auto`, maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>This is a Gatsby Blog Website</p>
  </Layout>
)

export default IndexPage
