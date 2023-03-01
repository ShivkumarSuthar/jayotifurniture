import React from 'react';
import WhyImg from './images/feature.jpg'

function Why() {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mt-5 py-5 pr-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Why Choose Us?
            </h6>
            <h1 className="mb-4 section-title">
              12+ Years Experience As the Interior Carpenter & Contractor.
            </h1>
            <p className="mb-4">
              Hi...<br />
              I'm Sunil Suthar & I am the head of the Jyoti funiture. We are the most reliable carpeter Firm in <b><span className="text-primary">Morbo Gujrat, India</span></b> and Let ReMake home as You always Wanted with us!. 
            </p>
            <ul className="list-inline">
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>10+ Years Of Working
                  Experience as a carpenter.
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>5+ Years
                  Experience as a Interior Contractor.
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>50+ Happy
                  Customers.
                </h5>
              </li>
           
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>Reliable Rates
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>5+ years of Work Guarantee.
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>Best Worker with Great Experience.
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>Customer Satisfaction
                </h5>
              </li>
            </ul>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">Get Quaotes</a>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
              <img className="h-100" src={WhyImg} alt="Why choice us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why