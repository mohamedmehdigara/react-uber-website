// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">Uber</h1>
        <div className="header__links">
          <a href="#company">Company</a>
          <a href="#safety">Safety</a>
          <a href="#help">Help</a>
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
