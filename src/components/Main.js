// Main.js
import React from 'react';

const Main = () => {
  return (
    <main className="main">
      <div className="main__earn">
        <h1>Earn</h1>
        <h2>Drive</h2>
        <h3>Car</h3>
        <h4>Ride</h4>
        <p>Get in the driver’s seat and get paid</p>
        <p>Drive on the platform with the largest network of active riders.</p>
        <a href="#signup">Sign up to drive</a>
        <a href="#learn-more">Learn more about driving and delivering</a>
        <a href="#request-ride">Request a ride now</a>
        <form className="main__ride-request-form">
          <input type="text" placeholder="Enter pickup location" />
          <input type="text" placeholder="Enter destination" />
          <button type="submit">Request now</button>
        </form>
        <a href="#schedule-later">Schedule for later</a>
      </div>

      <div className="main__business">
        <h1>The Uber you know, reimagined for business</h1>
        <p>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
        <a href="#get-started">Get started</a>
      </div>

      <div className="main__safety">
        <h1>Focused on safety, wherever you go</h1>
        <p>Our commitment to your safety</p>
        <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping create a safe environment for our users.</p>
        <a href="#community-guidelines">Read about our Community Guidelines</a>
        <a href="#safety-features">See all safety features</a>
      </div>

      <div className="main__cities">
        <h1>Setting 10,000+ cities in motion</h1>
        <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
        <a href="#all-cities">View all cities</a>
      </div>

      <div className="main__about">
        <h1>About us</h1>
        <p>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
        <a href="#learn-more-uber">Learn more about Uber</a>
      </div>

      <div className="main__newsroom">
        <h1>Newsroom</h1>
        <p>See announcements about our latest releases, initiatives, and partnerships.</p>
        <a href="#go-to-newsroom">Go to Newsroom</a>
      </div>

      <div className="main__global-citizenship">
        <h1>Global citizenship</h1>
        <p>Read about our commitment to making a positive impact in the cities we serve.</p>
        <a href="#see-partnerships">See our partnerships</a>
      </div>

      <div className="main__apps">
        <h1>There’s more to love in the apps</h1>
        <a href="#driver-app">Download the Driver app</a>
        <a href="#rider-app">Download the Uber app</a>
        <a href="#signup-drive">Sign up to drive</a>
        <a href="#signup-ride">Sign up to ride</a>
      </div>
    </main>
  );
};

export default Main;
