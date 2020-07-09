import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout' 
import SEO from '../components/Seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <strong>
        <Link to="/blog" className="nav__link" activeClassName='nav__link--active' title="Got to Blog page">Go to Blog now!!</Link>
      </strong>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
