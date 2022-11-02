[![Netlify Status](https://api.netlify.com/api/v1/badges/b2d56684-0305-4ef6-a14e-90a153b296a5/deploy-status)](https://app.netlify.com/sites/um-what-day-is-it/deploys)

# Um What Day Is It?
Because seriously, what day is it?

## Introduction
Hello! My name is Levi Porter and I'm a fullstack software engineer.


## Background
Built in early 2020, this project was a fun way to answer the question a lot of people had during the repetitiveness of the pandemic.

### Inspiration
- Covid-19 Pandemic
- [Youtube Video](https://www.youtube.com/watch?v=I36T_BDuZaM)

### Goal
- Move quickly.
- Fast native-like web experience (especially on mobile devices).

### Two Versions
- Original v1 built in April 2020.
- Updated v2 built in August 2022.

## Tech Stack
- Frontend: Gatsby as a React-based static site generator
- Backend: Google Sheets as CMS
- Hosting: Netlify

### Other Options Considered
- React
- Next.js
- Database + server for API routes

## Data Layer
### Data Model
Example data structure:

```json
{
  "dayOfWeek": "sunday",
  "mediaType": "image",
  "mediaLink": "https://media.giphy.com/media/JU3rbuqRNddlK/giphy.gif",
  "alt": "Lazy Sunday",
  "message": "Pass that chronic-WHAT-cles of Narnia!"
}
```

What it looks like in Google Sheets:
![image](./static/google-spreadsheets-cms.png)

### Querying the Data

```js
export const query = graphql`
  query {
    allGoogleSheet1Sheet {
      edges {
        node {
          id
          dayOfWeek
          mediaLink
          mediaType
          message
          alt
        }
      }
    }
  }
`;
```

## Presentation Layer

![component diagram](./static/umwhatdayisit.drawio.png)

## Opportunities for Improvement
1. Convert class component into a functional component utilizing React hooks.
2. 