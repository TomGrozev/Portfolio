import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";
import "./index.css";

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="icon"
    aria-label="Social Icon"
  >
    <Icon icon={icon} size="1.5" />
  </a>
);

SocialIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  link: PropTypes.string.isRequired,
};

const SocialIcons = ({ icons }) => (
  <ul className="flex justify-between space-x-3">
    {icons.map((args, index) => (
      <li key={index}>
        <SocialIcon {...args} />
      </li>
    ))}
  </ul>
);

SocialIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocialIcons;
