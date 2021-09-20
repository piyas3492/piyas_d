import React from "react";
import ErrorImg from "../assets/images/error.png";
const Error = (props) => {
  return (
    <>
      <div className="text-center col-md-4 offset-md-4">
        <img
          src={ErrorImg}
          alt="loading"
          className="img-fluid mt-5 border-0"
          height="300"
          width="400"
        />
        <p className="text-center mb-4">{props.errorText}</p>
      </div>
    </>
  );
};

export default Error;
