import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, dark, classes }) => (
  <div
    className={`relative shadow-xl rounded-lg ${classes} ${
      dark ? " bg-gray-900 text-white" : " bg-white text-black"
    }`}
  >
    {children}
  </div>
);

Card.propTypes = {
  dark: PropTypes.bool,
  classes: PropTypes.string,
};

Card.defaultProps = {
  dark: false,
  classes: "",
};

export default Card;
