import React from 'react';
import '../assets/scss/Social.scss';

const Social = () => {
  const socialNames = [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/orivelton/',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/orivelton',
      icon: 'github'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/orivelton_cesar',
      icon: 'twitter'
    }
  ];
  
  return (
    <ul className="social">
      {
        socialNames.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url} className={`icon icon-${icon}`} target="_blank" title={`Got to ${name}`} rel="noopener noreferrer">
              <span className="icon__name">{ name }</span>
            </a>
          </li>
        ))
      }
    </ul>
  )
};

export default Social;
