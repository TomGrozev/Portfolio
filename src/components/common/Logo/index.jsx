import React from 'react'
import PropTypes from "prop-types"
import img from '../../../images/logo.svg'

const Logo = ({ size, invert }) => (
  <div className={"w-" + size + (invert ? " invert" : "")}>
    <img className={"m-0"} src={img}  alt="Tom Grozev"/>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
  invert: PropTypes.bool
}

Logo.defaultProps = {
  size: `full`,
  invert: false
}

export default Logo;

export * from './dark';
export * from './light';
