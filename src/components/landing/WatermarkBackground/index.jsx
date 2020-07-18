import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const WatermarkBackground = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="absolute flex items-center justify-end top-0 left-0 w-full h-screen overflow-hidden z-0">
      <div className="w-9/12 sm:w-6/12 transform rotate-45 opacity-25 mt-48 sm:mt-0 mr-6 sm:mr-10 select-none">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  )
};

export default WatermarkBackground;
