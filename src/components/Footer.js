// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h1 className="footer__logo">Uber</h1>
        <a href="#help">Visit Help Center</a>
        <p>How the Uber and Uber Eats apps and websites work</p>
      </div>

      <div className="footer__middle">
        <div className="footer__section">
          <h3>Company</h3>
          <a href="#about">About us</a>
          <a href="#offerings">Our offerings</a>
          <a href="#newsroom">Newsroom</a>
          <a href="#investors">Investors</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
          <a href="#ai">AI</a>
          <a href="#gift-cards">Gift cards</a>
        </div>

        <div className="footer__section">
          <h3>Products</h3>
          <a href="#ride">Ride</a>
          <a href="#drive">Drive</a>
          <a href="#deliver">Deliver</a>
          <a href="#eat">Eat</a>
          <a href="#uber-for-business">Uber for Business</a>
          <a href="#uber-freight">Uber Freight</a>
        </div>

        <div className="footer__section">
          <h3>Global citizenship</h3>
          <a href="#safety">Safety</a>
          <a href="#diversity-inclusion">Diversity and Inclusion</a>
          <a href="#travel">Travel</a>
          <a href="#airports">Airports</a>
          <a href="#cities">Cities</a>
        </div>
      </div>

      <div className="footer__right">
        <a href="#en">English</a>
        <p>Trapani</p>
        <div className="footer__app-links">
          <a href="#android">Download the Uber app for Android</a>
          <a href="#ios">Download the Uber app for IOS</a>
        </div>
        <p>© 2023 Uber Technologies Inc.</p>
        <a href="#privacy">Privacy</a>
        <a href="#accessibility">Accessibility</a>
        <a href="#terms">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
