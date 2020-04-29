import React from "react";
import { Link } from "gatsby";
import Nav from "./Nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  console.log(location.pathname);

  if (location.pathname === rootPath) {
    header = (
      <Nav />
    )
  } else {
    header = (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="content">
        <main>{children}</main>
        <footer>
          ©  <a href="https://orivelton.com">Orivelton Cesar</a>
          {` `}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout
