import React from "react";
import maths from "../assets/maths.webp";
import science from "../assets/science.jpg";
import Title from "./Title";

const Subjects = () => {
  return (
    <>
    <Title title={"Subjects"} />
      <div style={{ margin: "40px 0" }}>
        <section class="bsb-hero-2 px-3">
          <div class="container overflow-hidden">
            <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
              <div class="col-12 col-lg-5 text-center">
               <div className="subject">Mathematics</div>
              </div>
              <div class="col-12 col-lg-5 text-center">
              <div className="subject">Science</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subjects;
