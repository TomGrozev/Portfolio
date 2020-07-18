import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PictureCard = ({image, title, text}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      className="relative shadow-lg rounded-lg group flex flex-1 justify-center items-center mx-2 my-3 bg-black cursor-pointer" style={ { minWidth: '280px', minHeight: '200px' } }>
      <Img
        className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center group-hover:opacity-50 transition-all duration-500 ease-in-out pointer-events-none"
        fluid={data.placeholderImage.childImageSharp.fluid}/>
      <div
        className="w-9/12 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out z-20 pointer-events-none">
        <h6 className="text-white font-bold text-lg text-center">{title}</h6>
        <p className="text-white text-center">{text}</p>
      </div>
    </div>

    // <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
    //   <div
    //     className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
    //     style="background-image: url('')">
    //   </div>
    //   <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
    //     Video Graphics
    //   </p>
    // </div>
  )
}

export default PictureCard
