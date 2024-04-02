import React from "react";
import square from "../assets/square_log.png"
import Title from "./Title";

const Features = () => {
  let subject = [
    { image: square, paragraph: "Quiet Study Zones for Concentration" },
    { image: square, paragraph: "Well-lit Classrooms with Comfortable Seating" },
    { image: square, paragraph: "Test Anxiety Workshops for Stress Management" },
    { image: square, paragraph: "Mock Test Sessions for Practice" },
    { image: square, paragraph: "Online Study Groups for Collaboration" },
    { image: square, paragraph: "Structured Routine Class Schedules" },
    { image: square, paragraph: "Study Skills Workshops for Effective Learning" },
    { image: square, paragraph: "Comfortable Classroom Furniture for Better Focus" },
  ];
  return (
    <div className="pt-5">
      <Title title={"FEATURES OF OUR INSTITUTE"} />

      <div className="container">
        <div className="row">
          {subject.map((obj, i) => {
            return (
              <>
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div
                    className="features_box h-100 cursor_pointer p-3 rounded-2"
                  >
                    <img src={obj.image} alt="image" className="w-100 h-100 object-fit-contain" />
                    <p className=" fs_22 fw-medium ff_heebo color_darkgray mt-3 fs-5 mb-0">
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

export default Features;
