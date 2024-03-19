import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center p-3 bg-light fs-3 title">
      <div className="line"> </div>
      <div className="text-nowrap">{title} </div>
      <div className="line"> </div>
    </div>
  );
};

export default Title;
