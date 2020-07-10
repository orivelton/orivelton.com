import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <header>
      <Nav />
    </header>
    <div className="content">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout
