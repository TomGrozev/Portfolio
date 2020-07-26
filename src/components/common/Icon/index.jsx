import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, alt, size }) => {
  const Tag = icon;
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size + "rem", height: size + "rem" }}
    >
      {typeof icon === "string" ? (
        <img
          className="max-h-full max-w-full w-full m-0"
          src={icon}
          alt={alt || "Icon"}
        />
      ) : (
        <Tag className="max-h-full max-w-full w-full" />
      )}
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
};

Icon.defaultProps = {
  size: 3,
};

export default Icon;
