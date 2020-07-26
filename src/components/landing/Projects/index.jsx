import React from "react";
import PictureCard from "../../common/PictureCard";
import PropTypes from "prop-types";

const Projects = ({ projects }) => (
  <div className="flex flex-wrap justify-around" style={{ minHeight: "500px" }}>
    {projects.map((project, index) => (
      <PictureCard key={index} {...project} />
    ))}
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
