import React from 'react';
import { Link } from 'gatsby';

const SuccessForm = () => (
  <p>
    <strong>
      Thanks for sending me a message! I'll send you a response soon.
    </strong>
    <Link to="/blog" className="nav__link" activeClassName='nav__link--active' title="Got to Blog page">Let's see the Blog?!!</Link>
  </p>
);

export default SuccessForm;