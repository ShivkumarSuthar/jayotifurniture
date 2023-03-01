import React from 'react';
import TileImg1 from './images/TILE 2.jpg';
import TileImg2 from './images/TILE 3.jpg';
import BedroomImg1 from './images/francesca-tosolini-hCU4fimRW-c-unsplash.jpg';
import BedroomImg2 from './images/interior-design-4467768_1920.jpg';
import KitchenImg1 from './images/pexels-max-vakhtbovych-6436799.jpg';
import KitchenImg2 from './images/sidekix-media-I_QC1JICzA0-unsplash.jpg';

function Services() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 pr-lg-5">
                        <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                            Our Awesome Services
                        </h6>
                        <h1 className="mb-4 section-title">
                            Awesome carpentry Services For Your Home
                        </h1>
                        <p>
                            We provide all the type of Interior services and also We take complete Interior Work contract.
                        </p>


                        <ul className="list-inline">
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>Modular Kitchen
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>Tile Display
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>All home Interior
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>TV Units and Other
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>Reparing of Old Furniture
                                </h5>
                            </li>
                            <li>
                                <h5>
                                    <i className="far fa-check-square text-primary mr-3"></i>Manufacture New furniture and etc..
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 p-0 pt-5 pt-lg-0">
                        <div className="owl-carousel service-carousel position-relative">
                            {/* Tile Display  */}
                    <div className="d-flex flex-column text-center bg-light mx-1 p-3" style={{height: "100%"}}>
                                <img src={TileImg1} height="170px" width="200px" />
                                <img src={TileImg2} height="170px" width="200px" />
                                <h5 className="mb-0 pt-1">Tile Display</h5>

                            </div>


                            <div className="d-flex flex-column text-center bg-light mx-1 p-3" style={{height: "100%"}}>
                                <img id="service-c" src={BedroomImg1} height="170px" width="200px" />
                                <img id="service-c" src={BedroomImg2}  height="170px" width="200px" />
                                <h5 className="mb-0 pt-1">Bedroom</h5>

                            </div>
                            <div className="d-flex flex-column text-center bg-light mx-1 p-3">
                                <img id="service-c" src={KitchenImg1} height="170px" width="200px" />

                                <img id="service-c" src={KitchenImg2} height="170px" width="200px" />
                                <h5 className="mb-0 pt-1">Kitchen</h5>

                            </div>
                            <div className="d-flex flex-column text-center bg-light mx-1 p-3">

                                <img id="service-c" src={KitchenImg1} alt="Hall" height="170px" width="200px" />
                                <img id="service-c" src={KitchenImg1} alt="Hall" height="170px" width="200px" />
                                <h5 className="mb-0 pt-1">Hall</h5>

                            </div>
                            <div className="d-flex flex-column text-center bg-light mx-1 p-3">
                                <img id="service-c" src={KitchenImg1} alt="" height="170px" width="200px" />
                                <img id="service-c" src={KitchenImg1} alt="" height="170px" width="200px" />
                                <h5 className="mb-0 pt-1">Stairs case</h5>
                            </div>
                            <div className="d-flex flex-column text-center bg-light mx-1 p-3">
                                <img id="service-c" src={KitchenImg1} alt="" height="170px" width="200px" />
                                <img id="service-c" src={KitchenImg1} alt="" height="170px" width="200px" />
                                    <h5 className="pb-0">TV Unit</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}

export default Services