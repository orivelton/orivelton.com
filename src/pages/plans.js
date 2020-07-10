import React from 'react';
import '../assets/scss/Plans.scss';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import plan from '../assets/images/plane.png';
import planePaper from '../assets/images/plane-paper.png';

const Plans = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  
  return (
    <Layout location={location} title={siteTitle}>
    <div className="background">
      <div className="container">
        <div className="panel pricing-table">
          
          <div className="pricing-plan">
            <img src={planePaper} alt="Startup" className="pricing-img" />
            <h2 className="pricing-header">Startup</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">Site estático</li>
              <li className="pricing-features-item">Hospedagem</li>
              <li className="pricing-features-item">50 envio de contato pelo site</li>
              <li className="pricing-features-item">Mudança de texto ou imagem 1 vez por mês</li>

              <li className="pricing-features-item">SEO</li>
            </ul>
            <span className="pricing-price">R$ 59,90/mês <br /> ou <br />R$ 659,89/ano</span>
            <strong>
              <Link to="/contact" className="pricing-button is-featured" title="Got to Blog page">Solicitar</Link>
            </strong>
          </div>
          
          <div className="pricing-plan">
            <img src={plan} alt="Small team" className="pricing-img" />
            <h2 className="pricing-header">Small team</h2>
            <ul className="pricing-features">
            <li className="pricing-features-item">Site estático</li>
              <li className="pricing-features-item">Hospedagem</li>
              <li className="pricing-features-item">100 envio de contato pelo site</li>
              <li className="pricing-features-item">Mudança de texto ou imagem 2 vez por mês</li>

              <li className="pricing-features-item">SEO</li>
            </ul>
            <span className="pricing-price">R$ 89,90/mês <br /> ou <br />R$ 988,90/ano</span>
            <strong>
              <Link to="/contact" className="pricing-button is-featured" title="Got to Blog page">Solicitar</Link>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
};

export default Plans;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`