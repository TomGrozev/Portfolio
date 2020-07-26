import React from "react";
import PropTypes from "prop-types";
import img from "../../../images/logo.svg";

const Logo = ({ size, invert }) => {
  let width;
  switch (size.toString()) {
    case "10":
      width = "w-10";
      break;
    case "12":
      width = "w-12";
      break;
    case "20":
      width = "w-20";
      break;
    default:
      width = "w-10";
  }

  return (
    <div className={width + (invert ? " invert" : "")}>
      <img className={"m-0"} src={img} alt="Tom Grozev" />
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  invert: PropTypes.bool,
};

Logo.defaultProps = {
  size: `full`,
  invert: false,
};

export default Logo;

export * from "./dark";
export * from "./light";
