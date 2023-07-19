// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">Uber</h1>
        <div className="header__links">
          <button onClick={toggleDropdown}>Company</button>
          {showDropdown && (
            <div className="header__dropdown">
              <a href="#about">About us</a>
              <a href="#offerings">Our offerings</a>
              <a href="#how-uber-works">How Uber works</a>
              <a href="#global-citizenship">Global citizenship</a>
              <a href="#newsroom">Newsroom</a>
              <a href="#investors">Investor relations</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
          )}
          <div>Safety</div>
          <div>Help</div>
          

        </div>
      </div>

      <div className="header__right">
        <div className="header__language">
          <a href="#en">EN</a>
        </div>
        <div className="header__auth">
          <a href="#products">Products</a>
          <a href="#login">Log in</a>
          <a href="#signup">Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
