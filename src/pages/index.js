import React, { Component } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout";
import DayContent from "../components/day-content";

import { dayFinder } from "../utils/day-finder.js";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todayIs: "",
      isBingo: false,
      isLastContent: false
    }
  }

  componentDidMount = () => {
    let todayIs = dayFinder();
    this.setState({ todayIs: todayIs });
  }

  bingoBango = (event) => {
    event.preventDefault();
    this.setState({ isBingo: true });

    const data = this.props.data.allGoogleSheetSheet1Row.edges;
    this.filterContent(data);
  }

  filterContent = (data) => {
    // const data = this.props.data.allGoogleSheetSheet1Row.edges;
    const dayOfWeek = this.state.todayIs.toUpperCase();

    // filter by day, only keep the day
    const filteredData = data.filter(content => content.node.dayofweek.toUpperCase() === dayOfWeek);

    // randomly select content
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    const todaysContent = filteredData[randomIndex];

    this.setState({ allContent: filteredData, currentContent: todaysContent });
  }

  getRandomContent = () => {
    let contentInState = this.state.allContent;
    let currentContent = this.state.currentContent;
    let currentContentIndex = contentInState.indexOf(currentContent);
    contentInState.splice(currentContentIndex, 1)

    // if we're at last content flip flag
    if (contentInState.length === 0) {
      this.setState({ isLastContent: true });
      return;
    }

    // filter by day, only keep the day
    if (contentInState.length > 0) {

      // randomly select content
      const randomIndex = Math.floor(Math.random() * contentInState.length);
      const todaysContent = contentInState[randomIndex];
      this.setState({ allContent: contentInState, currentContent: todaysContent });
    }
  }

  render() {
    if (this.state.isLastContent) {
      return (
        <Layout>
          <SEO title="Home" />

          <h1>That's all folks!</h1>

        </Layout>
      )
    } else {
      return (
        <Layout>
          <SEO title="Home" />
          {
            this.state.isBingo ?
              <>
                <DayContent
                  data={this.state.currentContent.node}
                  todayIs={this.state.todayIs}
                />
                <button id="" onClick={this.getRandomContent}>Show me another!</button>
              </>
              :
              <>
                <h1>Um What Day Is It?</h1>
                <button id="" onClick={this.bingoBango}>Let's find out!</button>
              </>
          }
        </Layout>
      )
    }
  }
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
        alt
        message
      }
    }
  }
}
`;