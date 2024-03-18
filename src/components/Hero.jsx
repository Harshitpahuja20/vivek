import React from "react";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div style={{marginTop : "90px"}}>
      <section class="bsb-hero-2 px-3">
        <div class="container overflow-hidden">
          <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <div class="col-12 col-lg-6 order-1 order-lg-0">
              <h1 class="display-3 fw-bold mb-3 text-blue">Let Them <br /> Learn with us</h1>
              <p class="fs-4 mb-4">
              Step into a world of discovery and growth. Unleash your potential and excel in a supportive, engaging environment. Join us on a journey of excellence!
              </p>
              <div class="d-grid gap-2 d-sm-flex">
                <button
                  type="button"
                  class="btn bg-blue text-white bsb-btn-3xl rounded-pill px-4 py-2"
                >
                  Visit us</button>
              </div>
            </div>
            <div class="col-12 col-lg-5 text-center">
              <img
                class="img-fluid"
                loading="lazy"
                src={hero}
                alt=""
                // style={{-webkit-mask-image: "url(./assets/img/hero-img-blob-1.svg)", maskImage: "url(./assets/img/hero-img-blob-1.svg)"}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
