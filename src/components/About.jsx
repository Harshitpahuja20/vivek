import React from "react";
import vivek from "../assets/vivek.jpg"
import Title from "./Title";

const Hero = () => {
  return (
   <div style={{marginTop : "30px"}}>
         <Title title={"ABOUT US"} />  
    <div>
      <section class="bsb-hero-2 px-3">
        <div class="container overflow-hidden pt-5">
          <div class="row gy-3 gy-lg-0 align-items-lg-center flex-row-reverse justify-content-lg-between">
            <div class="col-12 col-lg-6 order-1 order-lg-0">
            <div className="">
            <h4 className=" fw-bold ff_heebo fs-2 color_darkgray mb-0">
              Why Choose Us ?
            </h4>
            <p className="fs-6 ff_heebo fw-normal color_darkgray mt-3 mb-0">
              <i className="fw-bold">
                Project-Based Learning & Job Placement Assistance for Real-World
                Success
              </i>{" "}
              &nbsp; Our coding institute provides access to a wealth of
              continuous learning resources, including workshops, webinars,
              coding challenges, and online forums, to support students' ongoing
              growth and development
            </p>
            <div className="d-flex mt-4 align-items-center gap-3">
              <button className=" fs_15 px-4 ff_heebo fw-medium color_lightwhite Free_btn border-0 mt-sm-1">
                Try a Free Class
              </button>
              <button className=" fs_15 ff_heebo rounded-1 fw-medium color_lightwhite bg_darkblue px-4 py-2 border-0 mt-sm-1">
                Become a Teacher
              </button>
            </div>
          </div>
            </div>
            <div class="col-12 col-lg-5 text-center d-flex justify-content-center">
            <div className="about_img">
            <img
                class="img-fluid"
                loading="lazy"
                src={vivek}
                alt=""
              />
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   </div>
  );
};

export default Hero;
