import React from "react";
import '../styles/Slider.css'

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide crop"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>


        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../images/gallery_1.jpg')} className=" d-block w-100 img-fluid" alt="" />
            <div className="carousel-caption">
              <h2 className="text-dark text-start fw-normal display-4">Feel the joy.</h2>
              <p className="text-start display-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui, ad deleniti eveniet ut illo odio similique cupiditate ea hic!
              </p>
              <button className="btn btn-dark">Read More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../images/gallery_2.jpg')} className="d-block w-100 imgcrop" alt="" />
            <div className="carousel-caption">
              <h2 className="text-dark  text-start fw-normal display-4">Feel the joy.</h2>
              <p className="text-start display-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui, ad deleniti eveniet ut illo odio similique cupiditate ea hic!
              </p>
              <button className="btn btn-dark">Read More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../images/gallery_3.jpg')} className="d-block w-100 imgcrop" alt="" />
            <div className="carousel-caption">
              <h2 className="text-white display-1 text-start fw-normal display-4">Feel the joy.</h2>
              <p className="text-start display-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui, ad deleniti eveniet ut illo odio similique cupiditate ea hic!
              </p>
              <button className="btn btn-dark">Read More</button>
            </div>
          </div>
        </div>



        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


        
      </div>
    </div>
  );
};

export default Slider;
