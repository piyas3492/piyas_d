import React from "react";
import Loader from "../assets/images/loader.gif";
const Loading = () => {
  return (
    <>
      <div className="loading py-5">
        <div className="container text-center">
          <img src={Loader} alt="loader" height="100" width="100" />
          <h6 className="text-center my-3">Loading...</h6>
          <p className="text-justify">Please wait</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
