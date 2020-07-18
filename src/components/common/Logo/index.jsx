import React from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Logo = ({ size, data }) => {
  return (
    <div className={"w-" + size}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
};

Logo.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.string
}

Logo.defaultProps = {
  size: `full`
}

export default Logo;

export * from './dark';
export * from './light';
