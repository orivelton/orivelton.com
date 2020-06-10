import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    © {` `}
    <Link
      style={{
        boxShadow: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      Orivelton Cesar
    </Link> 
    {` `}
    {new Date().getFullYear()}
  </footer>
);

export default Footer;
