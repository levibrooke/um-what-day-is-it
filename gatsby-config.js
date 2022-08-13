/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Um What Day Is It?`,
    description: `Because seriously, what day is it?`,
    author: `@levibrooke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `um-what-day-is-it`,
        short_name: `um-what-day-is-it`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: `static/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/sass"],
        }
      },
    }
  ]
}
