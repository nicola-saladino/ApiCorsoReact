import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
      <div className="container-fluid">
        <Link className='navbar-brand d-block d-lg-none' to="/">
          <img src={logo} height="80" alt='logo' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto justify-content-center align-items-center">
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/about">About</Link>
            </li>
            <li className="nav-item d-none d-lg-block">
              
              <Link className='nav-link mx-2' to="/"><img className='nav-link mx-2' src={logo} height="60" alt='logo' /></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
