import React from "react"
import { graphql } from "gatsby"
import { dayFinder } from "../utils/day-finder.js";

import SEO from "../components/seo"
import Layout from "../components/layout";

const IndexPage = ({ data }) => {

  const todayIs = dayFinder();


return (
  <Layout>
    <SEO title="Home" />
    <p>{`Today is: ${todayIs}`}</p>
    {
      data.allGoogleSheetSheet1Row.edges.map(d => {
        return (
          <div key={d.node.id}>
            <p>{d.node.dayofweek}</p>
          </div>
        )
      }
      )
    }
  </Layout>
)
}

export default IndexPage;

// GraphQL query to our spreadsheet
export const query = graphql`
query {
  allGoogleSheetSheet1Row {
    edges {
      node {
        id
        dayofweek
        medialink
        mediatype
      }
    }
  }
}
`;