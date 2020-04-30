import React from 'react'
import { Link } from "gatsby";
import logo from '../assets/images/logo.svg'

const Logo = () => (
  <Link to="/" className="nav__link nav__link--logo" title="Go to Home">
    <img className="logo" src={logo} alt="Logo Orivelton Cesar"/>
  </Link>
)

export default Logo;
