module.exports = {
  siteMetadata: {
    title: "Tom Grozev | Full Stack Developer",
    description: "Hi, I'm Tom. I am a freelance developer from Australia. I develop systems built with the end-user at the forefront of development.",
    author: "Tom Grozev",
    siteUrl: "https://tomgrozev.com",
    keywords: "fullstack,blog,development,australia,elixir,python,"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tomgrozev.com`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-93159886-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800
            }
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              showCaptions: true,
              markdownCaptions: true,
              quality: 80,
              withWebp: true
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        include: /images\/icons\/.*\.svg/
      }
    },
    `gatsby-plugin-zopfli`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        args: `?render=explicit`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "tomgrozev-portfolio",
        acl: null
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom Grozev | Full Stack Developer`,
        short_name: `tomgrozev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1a202c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
