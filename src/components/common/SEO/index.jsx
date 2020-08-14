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
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, preview, type, publishDate }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            twitterUsername
          }
        }
      }
    `
  )

  const metaTitle = title + " - " + site.siteMetadata.title
  const metaLang = lang || "en"
  const metaDescription = description || site.siteMetadata.description
  const metaType = type || "website"
  const metaUrl =  site.siteMetadata.siteUrl + useLocation().pathname

  const image = site.siteMetadata.siteUrl + ((preview && preview.childImageSharp.fluid.src) || previewImg)

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang: metaLang
      }}
      title={site.siteMetadata.title}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `author`,
          content: site.siteMetadata.author
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:url`,
          content: metaUrl
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
          property: `og:image:secure_url`,
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
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername
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
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords
        },
        {
          name: `article:published_time`,
          content: metaType === 'article' && publishDate ? publishDate : null
        },
        {
          name: `article:author`,
          content: metaType === 'article' ? site.siteMetadata.author : null
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
