const dotenv = require(`dotenv`);

dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Um What Day Is It?`,
    description: `Because seriously, what day is it?`,
    author: `@levibrooke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        display: `default`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
          spreadsheetId: `${process.env.SPREADSHEET_ID}`,
          worksheetTitle: `Sheet1`,
          credentials: JSON.parse(`${process.env.CREDS}`)
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-gosquared`,
      options: {
        token: "GSN-769545-D"
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
