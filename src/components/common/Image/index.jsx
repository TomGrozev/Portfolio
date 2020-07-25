import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { ext: { regex: "/png|jpg|gif/" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let image = null
      if (props.src !== "") {
        image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.src)
        })
      }
      if (!image || !image.node || !image.node.childImageSharp) {
        image = data.images.edges.find(n => {
          return n.node.relativePath.match(/projects\/default\.jpg/)
        })
      }

      return (
        <Img
          className={props.classes}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        />
      )
    }}
  />
)

export default Image
