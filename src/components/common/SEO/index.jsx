/**
 * Index component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import previewImg from "../../../images/logo-colour-small.png"

function SEO({ description, lang, meta, title, preview, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title + " - " + site.siteMetadata.title
  const metaLang = lang || "en"
  const metaDescription = description || site.siteMetadata.description
  const metaType = type || "website"

  let origin = ""
  if (typeof window !== "undefined") {
    origin = window.location.origin
  }
  const image = origin + ((preview && preview.childImageSharp.fluid.src) || previewImg)

  return (
    <Helmet
      htmlAttributes={{
        lang: metaLang
      }}
      title={metaTitle}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:type`,
          content: metaType
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: image
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
