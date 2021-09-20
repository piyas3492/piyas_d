import React from "react";
import { NavLink } from "react-router-dom";
import ErrorImg from "../assets/images/pagenotfound.png";
const ErrorC = () => {
  return (
    <>
      <div className="ErrorC py-5">
        <div className="container text-center">
          <img
            src={ErrorImg}
            alt="404-img"
            className="img-responsive"
            height="150"
          />
          <h1 className="text-center mb-3">404 Page Not Found</h1>
          <p className="text-center">
            Oops! We are unable to find your page. <br /> <br />
            <NavLink
              className="text-primary font-weight-bold text-decoration-none mt-4"
              exact
              to="/"
            >
              Go back to home page
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorC;
