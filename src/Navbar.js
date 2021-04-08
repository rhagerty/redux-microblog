import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-light bg-info">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link text-light">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/new" className="nav-link text-light">
           Add a new post
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
