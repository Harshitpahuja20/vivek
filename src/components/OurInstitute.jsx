import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/vivek.jpg"
import Title from './Title'

const OurInstitute = () => {

    let subject = [
        { image: img1 },
        { image: img2},
        { image: img3},
        { image: img4},
      ];

  return (
    <div className="pt-5" id='institute'>
    <Title title={"OUR INSTITUTE"} />

    <div className="container">
      <div className="row">
        {subject.map((obj, i) => {
          return (
            <>
              <div key={i} className="col-lg-3 col-md-6 col-sm-6 mt-4">
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