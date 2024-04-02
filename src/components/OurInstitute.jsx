import React from 'react'
import maths from "../assets/img1.jpg"
import bio from "../assets/img2.jpg"
import chem from "../assets/vivek.jpg"
import Title from './Title'

const OurInstitute = () => {

    let subject = [
        { image: maths },
        { image: bio},
        { image: chem},
      ];

  return (
    <div className="pt-5" id='institute'>
    <Title title={"OUR INSTITUTE"} />

    <div className="container">
      <div className="row">
        {subject.map((obj, i) => {
          return (
            <>
              <div key={i} className="col-lg-4 col-md-4 col-sm-6 mt-4">
                <div
                  className="institute_box h-100 cursor_pointer p-4 rounded-2"
                >
                  <img src={obj.image} alt="image" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default OurInstitute