import React from 'react';
import logo from './assets/images/logo for manvasanai.png'; // Update the path as needed

function Navabar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#/">
            <img src={logo} alt="Brand Logo" style={{ width: '120px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <p style={{color: 'green', fontSize: '25px', fontWeight: 'bolder', marginTop: '20px'}}>கோவை மண்வாசனை இயற்கை உணவகம் </p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-1">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#about-us">About Us</a>
              </li>
              <li className="nav-item pe-1">
                <a className="nav-link" href="#our-menu">Our Menu</a>
              </li>
              {/* <li className="nav-item pe-1">
                <a className="nav-link" href="#specialty">Speciality</a>
              </li> */}
              <li className="nav-item pe-1">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item pe-1" style={{backgroundColor:"green",borderRadius:"10px",color:"white"}}>
              <a href="https://wa.me/7010652833" target='blank' className="nav-link"  style={{color:"white"}}>
                Booking Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navabar;
