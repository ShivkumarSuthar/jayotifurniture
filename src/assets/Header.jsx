import React from 'react';
import logo from './images/Untitled-1-removebg-preview.png';

function Header() {




  return (
    <div className="container-fluid position-relative nav-bar p-0">
    <div className="container position-relative" style={{zIndex: "9"}}>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
        <a href="/" className="navbar-brand">
          
          <img src={logo} alt="logo" style={{width: "60px"}} />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="index.html" className="nav-item nav-link active">HOME</a>
            <a href="about.html" className="nav-item nav-link">ABOUT US</a>
            <a href="service.html" className="nav-item nav-link">SERVICES</a>
            <a href="project.html" className="nav-item nav-link">OUR WORKS</a>
            <a href="contact.html" className="nav-item nav-link">CONTACT US</a>
          </div>
        </div>
      </nav>
    </div>
  </div>


  )
}

export default Header