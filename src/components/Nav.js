import React from 'react';
import Logo from './Logo';
import '../assets/scss/Nav.scss';

const Nav = () => (
  <nav className="nav">
    <div className="nav__menu">
      <Logo />
      <ul>
        <li>
          <a href="/" className="nav__link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;