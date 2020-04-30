import React from "react"
import Logo from "./Logo";
import '../assets/scss/Nav.scss';
import { Link } from "gatsby"

const Nav = () => (
  <nav className="nav">
    <div className="nav__menu">
        <Logo />
        <ul className="nav__group">
          <li>
            <Link to="/blog" className="nav__link" title="Got to Blog page">Blog</Link>
          </li>
          {/* <li>
            <Link to="/time-line" className="nav__link" title="Got to Time Line page">Time Line</Link>
          </li> */}
          <li>
            <Link to="/contact" className="nav__link" title="Got to Contact page">Contact</Link>
          </li>
        </ul>
    </div>
    <hr />
  </nav>
);

export default Nav;