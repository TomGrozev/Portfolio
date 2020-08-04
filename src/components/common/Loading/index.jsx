import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types"

const Loading = ({ size }) => (
  <Loader type="ThreeDots" color="#a0aec0" height={size} width={size} />
);

Loading.defaultProps = {
  size: 70
};

Loading.propTypes = {
  size: PropTypes.number
};

export default Loading;
