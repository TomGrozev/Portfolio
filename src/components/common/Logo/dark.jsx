import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "./index"
import PropTypes from "prop-types"

const DarkLogo = ({size}) => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo-black.png" } ) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

  return (
    <Logo data={data} size={size} />
  )
};

DarkLogo.propTypes = {
  size: PropTypes.string
};

export default DarkLogo;
