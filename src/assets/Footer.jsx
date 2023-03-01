import React from 'react'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
    <div className="row pt-5">
      <div className="col-lg-4 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Get In Touch</h4>
        <p>
          <i className="fa fa-map-marker-alt mr-2"></i><b>MORBI, GUJRAT 363641, INDIA</b>
        </p>
        <p><i className="fa fa-phone-alt mr-2"></i>+919725425536</p>
        <p><i className="fa fa-envelope mr-2"></i>sanga21suthar@gmail.com</p>
        <div className="d-flex justify-content-start mt-4">
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "38px", height: "38px" }}
            href="#"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "38px", height: "38px"}}
            href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "38px", height: "38px"}}
            href="#"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: "38px", height: "38px"}}
            href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="/index.html"><i className="fa fa-angle-right mr-2"></i>HOME</a>
          <a className="text-white mb-2" href="/about.html"><i className="fa fa-angle-right mr-2"></i>ABOUT US</a>
          <a className="text-white mb-2" href="/service.html"><i className="fa fa-angle-right mr-2"></i>OUR SERVICES</a>
          <a className="text-white mb-2" href="/project.html"><i className="fa fa-angle-right mr-2"></i>OUR WORKS</a>
          <a className="text-white" href="/contact.html"><i className="fa fa-angle-right mr-2"></i>CONTACT US</a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-5">
        <h4 className="text-primary mb-4">Reach Out With Us</h4>
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control border-0" placeholder="Your Name" required="required" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control border-0" placeholder="Your Email" required="required" />
          </div>
          <div>
            <button className="btn btn-lg btn-primary btn-block border-0" type="submit">
              Submit Now
            </button>
          </div>
        </form>
      </div>

     
    </div>
    <div className="container border-top border-secondary pt-5">
      <p className="m-0 text-center text-white">
        &copy;
        <a className="text-white font-weight-bold" href="#">jayotifurniture.info</a>.
        All Rights Reserved. Developed by
        <a className="text-white font-weight-bold" href="https://htmlcodex.com">Mr. Shivkumar Suthar</a>
      </p>
    </div>
  </div>

  )
}

export default Footer