import React from 'react';
import carouselImage1 from './images/pexels-max-vakhtbovych-5997965.jpg';
import UnderNav from './UnderNav';
import Header from './Header';
// import carouselImage2 from './images/tv-cabinet-6185022_1920.jpg';
// import TV from './images/Tv unit.jpg';
// import mLivingImg1 from './images/m-living (1).jpg';
// import mLivingImg2 from './images/m-living (2).jpg';



function Home() {
    return (
    
        <div className='home'>
       <Header/>
       {/* <UnderNav/> */}
       <div id="carouselExampleSlidesOnly" className=" container carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h6 className='carouselText d-block w-100'>CREATIVE INTERIOR DESIGN + CREATIVE CARPENTER = HAPPY FURNITURE</h6>
      <h2 className='carouselText2 d-block w-100'>Stay At Home In Peace</h2>
      <div className='btn d-block w-100'>
     <input className='carouselButton' type={'button'} value="Get Quotes"></input>

      </div>
    </div>
    <div class="carousel-item">
    <h6 className='carouselText d-block w-100'>CREATIVE INTERIOR DESIGN WITH SKILLED CARPENTERS</h6>
      <h2 className='carouselText2 d-block w-100'>Make Your Home Better</h2>
      <div className='media d-block w-100'>
    <a href='/'><i class="fa-brands fa-instagram"></i></a>
    <a href='/'><i class="fa-brands fa-facebook"></i></a>
    <a href='/'><i class="fa-brands fa-pinterest"></i></a>

      </div>
    </div>
    
  </div>
</div>

        </div>



        
       
    )
}

export default Home