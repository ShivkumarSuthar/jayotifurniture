import React from 'react';
import logo from './images/Untitled-1-removebg-preview.png';

function Header() {




  return (
    <div className="container-fluid position-relative  p-0">
    <div className="container position-relative" style={{zIndex:9}}>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-2 py-lg-2 pl-3 pl-lg-">
        <a href="/" className="navbar-brand ms-3">
          
          <img src={logo} alt="logo" style={{width: "60px"}} />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ms-auto ml-auto py-0">
            <a href="index.html" className="nav-item nav-link active px-2">HOME</a>
            <a href="about.html" className="nav-item nav-link px-2">ABOUT US</a>
            <a href="service.html" className="nav-item nav-link px-2">SERVICES</a>
            <a href="project.html" className="nav-item nav-link px-2">OUR WORKS</a>
            <a href="contact.html" className="nav-item nav-link px-2">CONTACT US</a>
          </div>
        </div>
      </nav>
    </div>
  </div>


  )
}

export default Header