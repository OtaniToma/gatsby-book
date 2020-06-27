import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ location }) => (
  <Layout>
    <SEO pagetitle="404 Page Not Found" pagepath={location.pathname} />
    <h1 style={{ padding: "50vh 0", textAlign: "center" }}>404 Page Not Found</h1>
  </Layout>
)