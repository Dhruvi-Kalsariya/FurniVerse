import React from 'react';

// ✅ Image Imports
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import cross from './images/cross.svg';

import couch from './images/couch.png';


const Shop = () => {
  return (
    <div>

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} alt="Couch" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}


      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">

            {/* Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product3} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product1} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product2} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product3} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            {/* Repeat Section */}

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product3} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product1} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product2} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={product3} className="img-fluid product-thumbnail" alt="" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Shop;
