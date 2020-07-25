import { navigate } from "gatsby-link"
import Img from "gatsby-image"
import Icon from "../Icon"
import Icons from "../../icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

function handlePostClick(slug) {
  navigate(`/blog/${slug}`)
}

const BlogItem = ({ post }) => {
  const { slug } = post.node.fields
  const { title, date, tags, coverImage } = post.node.frontmatter
  const excerpt = post.node.excerpt

  return (
    <button className="shadow hover:shadow-lg focus:outline-none rounded-sm transform hover:-translate-y-2 transition-all ease-in-out duration-200 bg-white cursor-pointer m-3 flex-1" style={{maxWidth: "400px", minWidth: "300px"}} onClick={() => handlePostClick(slug)} onKeyDown={() => handlePostClick(slug)}>
      <Img fluid={coverImage.childImageSharp.fluid} />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm mt-1 text-gray-500">{date}</span>
        <p className="text-gray-600 text-sm leading-tight">{excerpt}</p>
        <div className="text-sm text-gray-600 space-x-1">{tags.map((tag) => (
          <span key={tag} className="bg-gray-300 py-1 px-2 leading-none rounded-lg inline-flex items-center"><Icon icon={Icons.Tag} size={0.7} /> <span className="ml-1">{tag}</span></span>
        ))}</div>
      </div>
    </button>
  )
}

const BlogList = ({limit}) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM Do, YYYY")
              tags
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 90)
          }
        }
      }
    }
  `)
  const posts = limit === 0 ? data.allMarkdownRemark.edges : data.allMarkdownRemark.edges.slice(0, limit)

  return (
    <div className="flex flex-wrap justify-around my-8">
      {posts.map((post) => (
        <BlogItem key={post.node.fields.slug} post={post}/>
      ))}
    </div>
  )
}

BlogList.propTypes = {
  limit: PropTypes.number
}

BlogList.defaultProps = {
  limit: 0
}

export default BlogList
