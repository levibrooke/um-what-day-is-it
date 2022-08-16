[![Netlify Status](https://api.netlify.com/api/v1/badges/b2d56684-0305-4ef6-a14e-90a153b296a5/deploy-status?branch=rest-backend)](https://app.netlify.com/sites/um-what-day-is-it/deploys)

# Um What Day Is It?
Because seriously, what day is it? Live at https://rest-backend.umwhatdayisit.com/

## Background
Built in early 2020, this project was a fun way to answer the question a lot of people had during the repetitiveness of the pandemic.

## Tech Stack
- Frontend: Gatsby as a React-based static site generator
- Backend: Django-based REST API with MongoDB
- Hosting: Netlify for frontend, Heroku for backend

## New Backend
I decided to create an entirely new backend as a way to get some practice with Django and MongoDB. The original project sourced data from a Google Spreadsheet using a Gatsby plugin and accessed it with GraphQL. For the new backend, I decided to create a REST API and store the content in MongoDB. There is also an official MongoDB plugin for Gatsby that could of been used.

- [New backend repo](https://github.com/levibrooke/umwhatdayisit-backend)

## Frontend Modifications
Typically, you utilize a source plugin to manage data in Gatsby projects. These plugins allow you get your data into Gatsby's data layer and query the data using GraphQL. While not recommended, there is a way to [get your data into Gatsby without using GraphQL.](https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/) Since I built a small REST API I opted for this approach.

To accomplish this, I made changes to fetch the data and supply it to the `createPages` API. This allows you to create pages dynamically in Gatsby. After that I had some minor changes to make so that the page template would correctly render with the new data.

- [Commit where the bulk of the changes were made.](https://github.com/levibrooke/um-what-day-is-it/commit/bed02c70cce399801159d51acf9f872c039ef1d0)
