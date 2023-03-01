import React from 'react'
import telephone from 'https://embed.lottiefiles.com/animation/27788';

function UnderNav() {
  return (
  
  <div className="container bg-white py-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 text-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left ">
        <h1><i className="fa-solid fa-location-crosshairs font-weight-normal m-0 mx-4"></i></h1>
                   <div className="d-flex flex-column">
            <h5 style={{textAlign:"start"}}>Our Office</h5>
           <p className="address m-0"><b>MORBI, GUJRAT 363641, INDIA</b></p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left">
        <h1><i className="fa-solid fa-envelope-open-text mx-4" ></i></h1>
         
          <div className="d-flex flex-column">
            <h5 className='font-weight-bolder' style={{textAlign:"start"}}>Email Us</h5>
            <a className="mail text-decoration-none" href="mailto:sanga21suthar@gmail.com"><p className="m-0 text-decoration-none">sanga21suthar@gmail.com</p></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-center mb-3 mb-lg-0">
        <div className="d-inline-flex text-left">
        <h1>
        {/* <i className="fa-duotone fa-mobile-retro m-0 mx-4"></i><i className="fa-solid fa-mobile-retro m-0 mx-4"></i> */}
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_PBgNop.json"  background="transparent"  speed='1' style={{width: "300px", height: "300px"}}  loop controls autoplay></lottie-player>
        </h1>
          
          <div className="d-flex flex-column">
            <h5 style={{textAlign:"start"}}>Call Us</h5>
            <p className="m-0">
              <a className="tel text-decoration-none" href="tel:+919725425536"> +919725425536</a>
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