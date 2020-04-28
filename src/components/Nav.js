import React from 'react';
import Logo from './Logo';
import '../assets/scss/Nav.scss';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import TimeLine from '../pages/TimeLine';

const Nav = () => (
  <Router>
    <nav className="nav">
      <div className="nav__menu">
          <Logo />
          <ul className="nav__group">
            <li>
              <Link to="/blog" className="nav__link" title="Got to Blog page">Blog</Link>
            </li>
            <li>
              <Link to="/time-line" className="nav__link" title="Got to Time Line page">Time Line</Link>
            </li>
            <li>
              <Link to="/contact" className="nav__link" title="Got to Contact page">Contact</Link>
            </li>
          </ul>
      </div>
      <hr />
    </nav>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/time-line" component={TimeLine} />
    </Switch>
  </Router>
);

export default Nav;