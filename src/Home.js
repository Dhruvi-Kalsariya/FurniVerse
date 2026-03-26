import React from "react";
import { Link } from "react-router-dom";   // ✅ ADD THIS


import './css/bootstrap.min.css';
import './css/style.css';
import './css/tiny-slider.css';

import './js/bootstrap.bundle.min.js';
import './js/custom.js';
import './js/tiny-slider.js';

import couch from './images/couch.png';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';


import whyImg from './images/why-choose-us-img.jpg';

import crossIcon from './images/cross.svg';

import truckIcon from './images/truck.svg';
import bagIcon from './images/bag.svg';
import supportIcon from './images/support.svg';
import returnIcon from './images/return.svg';

import grid1 from './images/img-grid-1.jpg';
import grid2 from './images/img-grid-2.jpg';
import grid3 from './images/img-grid-3.jpg';

import person1 from './images/person-1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import userIcon from "./images/user.svg";
import cartIcon from "./images/cart.svg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Home() {
  return (
    <>
      
      <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between align-items-center">

            <div className="col-lg-5">
              <h1>
                Modern Interior <span className="d-block">Design Studio</span>
              </h1>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              </p>
              <a href="#" className="btn btn-secondary me-2">Shop Now</a>
              <a href="#" className="btn btn-outline-light">Explore</a>
            </div>

            <div className="col-lg-7">
              <div className="hero-img-wrap">
                {/* <img src="./images/couch.png" className="img-fluid" alt="couch" /> */}
                <img src={couch} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Products */}
      <div className="product-section">
  <div className="container">
    <div className="row">

      {/* Column 1 */}
      <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
        <h2 className="mb-4 section-title">
          Crafted with excellent material.
        </h2>

        <p className="mb-4">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

        <p>
          <a href="#" className="btn">Explore</a>
        </p>
      </div>

      {/* Column 2 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="#">
          <img src={product1} className="img-fluid product-thumbnail" alt="product" />

          <h3 className="product-title">Nordic Chair</h3>
          <strong className="product-price">$50.00</strong>

          <span className="icon-cross">
            <img src={crossIcon} className="img-fluid" alt="add" />
          </span>
        </a>
      </div>

      {/* Column 3 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="#">
          <img src={product2} className="img-fluid product-thumbnail" alt="product" />

          <h3 className="product-title">Kruzo Aero Chair</h3>
          <strong className="product-price">$78.00</strong>

          <span className="icon-cross">
            <img src={crossIcon} className="img-fluid" alt="add" />
          </span>
        </a>
      </div>

      {/* Column 4 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="#">
          <img src={product3} className="img-fluid product-thumbnail" alt="product" />

          <h3 className="product-title">Ergonomic Chair</h3>
          <strong className="product-price">$43.00</strong>

          <span className="icon-cross">
            <img src={crossIcon} className="img-fluid" alt="add" />
          </span>
        </a>
      </div>

    </div>
  </div>
</div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>

              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={truckIcon} alt="truck" className="img-fluid" />
                    </div>
                    <h3>Fast & Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={bagIcon} alt="bag" className="img-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={supportIcon} alt="support" className="img-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={returnIcon} alt="return" className="img-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={whyImg} alt="why" className="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">

            {/* Product 1 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product1} alt="product" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                  </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product2} alt="product" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                  </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src={product3} alt="product" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                  </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={grid1} alt="grid1" className="img-fluid" />
                </div>
                <div className="grid grid-2">
                  <img src={grid2} alt="grid2" className="img-fluid" />
                </div>
                <div className="grid grid-3">
                  <img src={grid3} alt="grid3" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>

              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                Pellentesque habitant morbi tristique senectus et netus et malesuada.
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>

              <p>
                <a href="#" className="btn">Explore</a>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
      <div className="container text-center">

        <h2 className="section-title mb-5">Testimonials</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >

          <SwiperSlide>
            <div className="testimonial-box">
              <p className="testimonial-text">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.”
              </p>

              <img src={person1} className="testimonial-img" alt="person" />

              <h5>Maria Jones</h5>
              <span>CEO, Co-Founder, XYZ Inc.</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <p className="testimonial-text">
                “Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique.”
              </p>

              <img src={person1} className="testimonial-img" alt="person" />

              <h5>Maria Jones</h5>
              <span>CEO, Co-Founder, XYZ Inc.</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-box">
              <p className="testimonial-text">
                “Integer convallis volutpat dui quis scelerisque. Donec facilisis quam ut purus rutrum.”
              </p>

              <img src={person1} className="testimonial-img" alt="person" />

              <h5>Maria Jones</h5>
              <span>CEO, Co-Founder, XYZ Inc.</span>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
    
    </>

    
    </>
  );
}

export default Home;