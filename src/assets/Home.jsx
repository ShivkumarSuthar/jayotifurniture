import React from 'react';
import carouselImage1 from './images/pexels-max-vakhtbovych-5997965.jpg';
import carouselImage2 from './images/tv-cabinet-6185022_1920.jpg';
import mLivingImg1 from './images/m-living (1).jpg';
import mLivingImg2 from './images/m-living (2).jpg';



function Home() {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img className="w-100 L-carouselmg1" src={carouselImage1} alt="Image" />
                        <img className="w-100 mLivingImg1" src={mLivingImg2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "800px"}}>
                                <h4 id="c-head-text" className="text-primary text-uppercase font-weight-normal mb-md-3">
                                    Creative Interior Design <span>with skilled carpenters</span>
                                </h4>
                                <h3 id="c-head-text-2" className="display-3 text-white mb-md-4">
                                    Make Your Home Better
                                </h3>
                                <a id="c-btn-text" href="" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">GET QUOTES- It's Free</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <img className="w-100 carouselImage2" src={carouselImage2} alt="Image" />
                        <img className="w-100 mLivingImg2" src={mLivingImg2} alt="Image" />

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "800px"}}>
                                <h4 id="c-head-text" className="text-primary text-uppercase font-weight-normal mb-md-3">
                                    Creative Interior Design <span>+</span> Creative Carpenter <span>=</span> Happy Furniture
                                </h4>
                                <h3 id="c-head-text-2" className="display-3 text-white mb-md-4">
                                    Stay At Home In Peace
                                </h3>
                                <a id="c-btn-text" href="./about.html" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">GET QUOTES- It's Free </a>
                            </div>
                        </div>
                    </div>




                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-primary" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home