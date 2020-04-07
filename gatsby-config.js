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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
