module.exports = {
  siteMetadata: {
    pathPrefix: "orivelton.com",
    title: `Orivelton Cesar`,
    author: {
      name: `Orivelton Cesar`,
      summary: `Front End Developer`,
    },
    description: `Orivelton Cesar - Front End Developer - Javascript - HTML - CSS - React - Angular.`,
    siteUrl: `https://orivelton.com`,
    social: {
      twitter: `orivelton`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Code Pro`,
            variants: [`200`,`300`,`400`,`500`,`600`,`700`,`900`,`200`,`300`,`400`,`500`,`600`,`700`,`900`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orivelton Cesar - Front End`,
        short_name: `Orivelton`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/orivelton-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/*']
         }
      }
   }
  ],
}
