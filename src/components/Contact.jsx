import React from "react";
import hero from "../assets/hero.png";
import Title from "./Title";

const Contact = () => {
  return (
    <>
    <Title title={"Contact Us"} />
      <div style={{ margin: "40px 0" }}>
        <section class="bsb-hero-2 px-3">
          <div class="container overflow-hidden">
            <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
              <div class="col-12 col-lg-5 text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9685106931925!2d75.71597127556204!3d29.16560017537789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d2390d0f5d%3A0xd414639e49e3223!2sHisar%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1710867074235!5m2!1sen!2sin"
                  width="500"
                  height="350"
                  className="border-0 abs"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-0">
                <div className="d-flex gap-2">
                  <h2 class="fs-3 mb-3 text-blue">Mobile Number : </h2>
                  <h2 className="fw-normal fs-3"> +91 98121-58121</h2>
                </div>
                <div className="d-flex gap-2">
                  <h2 class="fs-3 mb-3 text-blue">Email : </h2>
                  <h2 className="fw-normal fs-3">
                    {" "}
                    Harshitpahuja953@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
