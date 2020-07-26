import React from "react";
import Logo from "./index";
import PropTypes from "prop-types";

const LightLogo = ({ size }) => <Logo size={size} invert={true} />;

LightLogo.propTypes = {
  size: PropTypes.string,
};

export default LightLogo;
