import React from 'react';

import couch from './images/couch.png';

import truckIcon from './images/truck.svg';
import bagIcon from './images/bag.svg';
import supportIcon from './images/support.svg';
import returnIcon from './images/return.svg';

import whyImg from './images/why-choose-us-img.jpg';


import person1 from './images/person_1.jpg';
import person2 from './images/person_2.jpg';
import person3 from './images/person_3.jpg';
import person4 from './images/person_4.jpg';


const About = () => {
  return (
    <div>

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
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

      {/* Start Team Section */}
      <div className="untree_co-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">

            {/* Column 1 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={person1} className="img-fluid mb-5" alt="" />
              <h3><a href="#"><span>Lawson</span> Arnold</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>Separated they live in.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More</a></p>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={person2} className="img-fluid mb-5" alt="" />
              <h3><a href="#"><span>Jeremy</span> Walker</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>Separated they live in.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More</a></p>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={person3} className="img-fluid mb-5" alt="" />
              <h3><a href="#"><span>Patrik</span> White</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>Separated they live in.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More</a></p>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={person4} className="img-fluid mb-5" alt="" />
              <h3><a href="#"><span>Kathryn</span> Ryan</a></h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>Separated they live in.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="#" className="more dark">Learn More</a></p>
            </div>

          </div>
        </div>
      </div>
      {/* End Team Section */}

    </div>
  );
};

export default About;
