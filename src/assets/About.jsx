import React from 'react'
import Image from './images/hall.jpeg'


function About() {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-flex flex-column align-items-center justify-content-center bg-primary h-100">
              <img src={Image} width="120.95px" height="120PX" alt="work experience"
                className="d-flex flex-column align-items-center justify-content-center bg-primary w-100 h-100 "/>


            </div>
          </div>
          <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Make your Dream Home Real
            </h6>
            <h1 className="mb-4 section-title">
              Custom Cabinets that are manufactured Just for You
            </h1>
            <p>
              "Jyoti Furniture" is here to help you fill the most of your home space with Cabinets and other that match
              your style. Our skilled carpenters manufacture cabinets and other objects for homeowners across and leave
              their homes looking more elegant and charming. <br />
                Are you ready to remake your Home into the Home you have always wanted? Call
                <a href="tel:"><span>+919725425536</span></a>
                to get started.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About