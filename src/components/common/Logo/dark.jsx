import React from "react"
import Logo from "./index"
import PropTypes from "prop-types"

const DarkLogo = ({size}) => (
  <Logo size={size} />
);

DarkLogo.propTypes = {
  size: PropTypes.string
};

export default DarkLogo;
