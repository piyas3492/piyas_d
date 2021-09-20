import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copyright py-3 text-center bg-primary text-white">
      <div className="container">
        &copy;{year}, Piyas All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
