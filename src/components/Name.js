import React from 'react';
import '../assets/scss/Name.scss';
import Social from '../components/Social';
import SEO from './Seo';

const Name = () => {
  return (
    <div className="home">
      <h1 className='name'>
        Orivelton César
      </h1>
      <h2>
        Front End Developer
      </h2>
      <h3 className="description">
        I work as a Front End but I have already ventured into the logistics and administrative area but found myself even within the codes. I've worked on big projects with many challenges and always been in love with open source projects. 
      </h3>
      <Social />
      <SEO description="Front End Developer" title="Orivelton Cesar" />
    </div>
  )
};

export default Name;
