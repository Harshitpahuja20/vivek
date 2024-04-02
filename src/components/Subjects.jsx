import React from "react";
import maths from "../assets/maths.png"
import bio from "../assets/biology.png"
import chem from "../assets/chemistry.png"
import phy from "../assets/physics.png"
import Title from "./Title";

const Subjects = () => {
  let subject = [
    { image: maths, paragraph: "Mathematics" },
    { image: bio, paragraph: "Biology" },
    { image: chem, paragraph: "Chemistry" },
    { image: phy, paragraph: "Physics" },
  ];
  return (
    <div className="py-5">
      <Title title={"SUBJECTS"} />

      <div className="container">
        <div className="row">
          {subject.map((obj, i) => {
            return (
              <>
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-4 d-flex justify-content-center">
                  <div
                    className="subject_box h-100 cursor_pointer p-4 rounded-2"
                  >
                    <img src={obj.image} alt="image" className="w-100 h-100 object-fit-contain" />
                    <p className=" fs_22 fw-medium ff_heebo color_darkgray mt-1 text-center fs-5 mb-0">
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

export default Subjects;
