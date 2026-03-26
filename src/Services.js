import React from "react";

// Images
import couch from './images/couch.png';
import truck from './images/truck.svg';
import bag from './images/bag.svg';
import support from './images/support.svg';
import returnImg from './images/return.svg';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import cross from './images/cross.svg';
import person1 from './images/person-1.png';
import sofa from './images/sofa.png';
import envelope from './images/envelope-outline.svg';
import userIcon from './images/user.svg';
import cartIcon from './images/cart.svg';


const Service = () => {
  return (
    <>

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Services</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p>
                  <a href="" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            {[truck, bag, support, returnImg, truck, bag, support, returnImg].map((img, idx) => (
              <div className="col-6 col-md-6 col-lg-3 mb-4" key={idx}>
                <div className="feature">
                  <div className="icon">
                    <img src={img} alt="Image" className="img-fluid" />
                  </div>
                  <h3>
                    {idx % 4 === 0 ? 'Fast & Free Shipping' : idx % 4 === 1 ? 'Easy to Shop' : idx % 4 === 2 ? '24/7 Support' : 'Hassle Free Returns'}
                  </h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Start Product Section */}
      <div className="product-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
              <p><a href="#" className="btn">Explore</a></p>
            </div>

            {[{img: product1, title: 'Nordic Chair', price: '$50.00'},
              {img: product2, title: 'Kruzo Aero Chair', price: '$78.00'},
              {img: product3, title: 'Ergonomic Chair', price: '$43.00'}].map((product, idx) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={idx}>
                <a className="product-item" href="#">
                  <img src={product.img} className="img-fluid product-thumbnail" alt={product.title} />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">{product.price}</strong>
                  <span className="icon-cross"><img src={cross} className="img-fluid" alt="Cross" /></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Product Section */}

      

      
    </>
  );
};

export default Service;