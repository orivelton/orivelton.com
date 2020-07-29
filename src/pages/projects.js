
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import axios from 'axios';

import '../assets/scss/Projects.scss';

import Layout from '../components/Layout';

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const [repos, setRepos] = useState([]);
 
  useEffect( () => {
    const result = async () => {
      const { data: repositories } = await axios('https://api.github.com/users/orivelton/repos?per_page=12');
      console.log(repositories);
      setRepos(repositories);
    }

    result();
  }, []);



  return (
    <Layout location={location} title={siteTitle}>
      <ul className="github-cards">
        {
          repos.map(({ id, html_url: htmlUrl, name, description, language }) => (
            <li key={id}>
              <a href={htmlUrl} className="github-card" target="_blank" title={description} rel="noreferrer">
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="github-card__meta">
                  <h4 className="github-card__language-icon">● {language}</h4>
                </span>
              </a>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
