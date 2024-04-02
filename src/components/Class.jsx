import React from "react";
import maths from "../assets/maths.png"
import bio from "../assets/biology.png"
import chem from "../assets/chemistry.png"
import phy from "../assets/physics.png"
import Title from "./Title";

const Classes = () => {
  let subject = [
    {  paragraph: "VII" },
    {  paragraph: "VIII" },
    {  paragraph: "IX" },
    {  paragraph: "X" },
  ];
  return (
    <div className="pt-5">
      <Title title={"CLASSES"} />

      <div className="container">
        <div className="row">
          {subject.map((obj, i) => {
            return (
              <>
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-4 d-flex justify-content-center">
                  <div
                    className="subject_box h-100 cursor_pointer p-4 rounded-2"
                  >
                    <p className="class_box p-5 mt-1 text-center fs-2 mb-0 rounded">
                      {obj.paragraph}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Classes;
