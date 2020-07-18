import React from "react"
import PropTypes from "prop-types"

const Icon = ({icon, size, alt}) => {
  let img;
  try {
    img = require("../../../images/icons/" + icon + ".svg");
  } catch (_) {
    return null;
  }

  if (!alt) {alt = icon}

  return (
    <div className="flex items-center justify-center" style={{ width: size + "rem", height: size + "rem" }}>
      <img className="max-h-full max-w-full w-full m-0" src={img} alt={alt}/>
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  alt: PropTypes.string
};

Icon.defaultProps = {
  size: 3
};

export default Icon
