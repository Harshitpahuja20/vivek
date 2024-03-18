import React from "react";
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import google from "../assets/google.png"

const Footer = () => {
  return (
    <div>
      <footer class="text-center bg-body-tertiary">
        <div class="container p-2">
          <section class="">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img src={google} alt="" className="icon"/>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img src={fb} alt="" className="icon"/>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img src={ig} alt="" className="icon"/>
            </a>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
        Copyright  ©  Vivekpahujaclasses. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
