import React from 'react';

const Nav = props => {
  return (
    <div id="nav">
      <div className="col-sm">
      <span className="nav-title">BOBA BUDDIES</span>
      </div>
      <nav className="col-sm justify-content-end">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#favorites">Favorites</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
