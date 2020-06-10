import React from 'react';
import '../assets/scss/Name.scss';
import Social from '../components/Social';
import SEO from './seo';

const Name = () => {
  return (
    <div className="name">
      <h1>
        Orivelton Cesar
      </h1>
      <h2>
        Front End Developer
      </h2>
      <Social />
      <SEO description="Front End Developer" title="Orivelton Cesar"/>
    </div>
  )
};

export default Name;
