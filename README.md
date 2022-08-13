[![Netlify Status](https://api.netlify.com/api/v1/badges/b2d56684-0305-4ef6-a14e-90a153b296a5/deploy-status?branch=rest-backend)](https://app.netlify.com/sites/um-what-day-is-it/deploys)

# Um What Day Is It?
Because seriously, what day is it? Live at https://rest-backend.umwhatdayisit.com/

## Background
Built in early 2020, this project was a fun way to answer the question a lot of people had during the repetitiveness of the pandemic.

## Tech Stack
- Frontend: Gatsby as a React-based static site generator
- Backend: Django-based REST API with MongoDB
- Hosting: Netlify

## New Backend
I decided to create an entirely new backend as a way to get some practice with Django and MongoDB. The original project sourced data from a Google Spreadsheet using a Gatsby plugin and accessed it with GraphQL. For the new backend, I decided to create a REST API and store the content in MongoDB. There is also an official MongoDB plugin for Gatsby that could of been used.

- [Github Repo](https://github.com/levibrooke/umwhatdayisit-backend)