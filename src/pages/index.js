import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Name from '../components/Name';
import SEO from '../components/Seo';

import '../assets/scss/index.scss';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || 'Orivelton Cesar';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO description="Orivelton Cesar" title="Orivelton Cesar - Front End Developer" />
      <Name name="Orivelton Cesar"/>
    </Layout>
  )
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
