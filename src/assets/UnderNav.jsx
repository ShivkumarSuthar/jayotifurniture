import React from 'react'


function UnderNav() {
  return (
  
  <div className="container bg-white py-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 text-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left ">
        <h1><i className="fa-solid fa-location-crosshairs font-weight-normal m-0 mx-4 text-warning"></i></h1>
                   <div className="d-flex flex-column">
            <h5 style={{textAlign:"start"}}>Our Office</h5>
           <a href='/' className='text-decoration-none'><p className="address m-0 text-success"><b>MORBI, GUJRAT 363641, INDIA</b></p></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left">
        <h1><i className="fa-solid fa-envelope-open-text mx-4 text-warning" ></i></h1>
         
          <div className="d-flex flex-column">
            <h5 className='font-weight-bolder' style={{textAlign:"start"}}>Email Us</h5>
            <a className="mail text-decoration-none" href="mailto:sanga21suthar@gmail.com"><p className="m-0 text-decoration-none text-success"><b>sanga21suthar@gmail.com</b></p></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left">
        <h1>
        <i className="fa-solid fa-mobile-retro m-0 mx-4 text-warning"></i>
        </h1>
          
          <div className="d-flex flex-column">
            <h5 style={{textAlign:"start"}}>Call Us</h5>
            <p className="m-0">
              <a className="tel text-decoration-none text-success " href="tel:+919725425536"><b>+919725425536</b></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default UnderNav