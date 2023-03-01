import React from 'react';
import logo from './images/Untitled-1-removebg-preview.png';

function Header() {




  return (
    <div className="container-fluid navbar-top  p-0">
    <div className="container position-relative" style={{zIndex:9}}>
      <nav className="navbar navbar-expand-lg navbar-dark py-2 py-lg-2 pl-3 pl-lg-">
        <a href="/" className="navbar-brand ms-4">
          
          <img src={logo} alt="logo" style={{width: "90px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav m-auto ml-auto py-0">
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