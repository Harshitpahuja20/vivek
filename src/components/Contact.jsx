import React from "react";
import Title from "./Title";
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import google from "../assets/google.png"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"

const Contact = () => {
  return (
    <>
    <Title title={"CONTACT US"} />
      <div style={{ margin: "40px 0" }} id="contact-us" >
        <section class="bsb-hero-2 px-3">
          <div class="container overflow-hidden">
            <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
              <div class="col-12 col-lg-5 text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3485.404927784305!2d75.69433067551897!3d29.12324467540035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA3JzIzLjciTiA3NcKwNDEnNDguOSJF!5e0!3m2!1sen!2sin!4v1712073581514!5m2!1sen!2sin"
                  width="500"
                  height="350"
                  className="border-0 abs"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-0">
                <div className="d-flex gap-4 mt-4">
                  <span class="icon_box"><img src={phone} alt="" width={"100%"} height={"100%"} /></span>
                  <h2 className="fw-normal fs-4"> <a href="tel:+918199032939" className="text-black text-decoration-none">+91 81990-32939</a></h2>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <span class="icon_box"><img src={email} alt="" width={"100%"} height={"100%"} /></span>
                  <h2 className="fw-normal fs-4"> <a href="mailto:vivekpahuja1998@gmail.com" className="text-black text-decoration-none">vivekpahuja1998@gmail.com</a></h2>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <span class="icon_box"><img src={google} alt="" width={"100%"} height={"100%"} /></span>
                  <h2 className="fw-normal fs-4"> <a href="https://vivekpahujaclasses.online" className="text-black text-decoration-none">vivekpahujaclasses.online</a></h2>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <span class="icon_box"><img src={ig} alt="" width={"100%"} height={"100%"} /></span>
                  <h2 className="fw-normal fs-4"> <a href="https://www.instagram.com/vivek_pahuja_classes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-black text-decoration-none">@vivek_pahuja_classes</a></h2>
                </div>
                <div className="d-flex gap-4 mt-4">
                  <span class="icon_box"><img src={fb} alt="" width={"100%"} height={"100%"} /></span>
                  <h2 className="fw-normal fs-4"> Vivek Pahuja Classes</h2>
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
