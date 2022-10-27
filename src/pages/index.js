import React, { Component } from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout";
import DayContent from "../components/day-content";

import { dayFinder } from "../utils/day-finder.js";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todayIs: "",
      showContent: false,
      isLastContent: false
    }
  }

  componentDidMount = () => {
    let todayIs = dayFinder();
    this.setState({ todayIs: todayIs });
  }

  showContentView = (event) => {
    event.preventDefault();
    this.setState({ showContent: true });

    const data = this.props.data.allGoogleSheet1Sheet.edges;
    this.filterContent(data);
  }

  filterContent = (data) => {
    const dayOfWeek = this.state.todayIs.toUpperCase();

    // filter by day, only keep the day
    const filteredData = data.filter(content => content.node.dayOfWeek.toUpperCase() === dayOfWeek);

    // randomly select content
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    const todaysContent = filteredData[randomIndex];

    this.setState({ allTodaysContent: filteredData, currentContent: todaysContent });
  }

  getRandomContent = () => {
    let contentInState = this.state.allTodaysContent;
    let currentContent = this.state.currentContent;
    let currentContentIndex = contentInState.indexOf(currentContent);
    contentInState.splice(currentContentIndex, 1)

    // if we're at last content node flip flag
    if (contentInState.length === 0) {
      this.setState({ isLastContent: true });
      return;
    }

    // randomly select content node from todays content
    if (contentInState.length > 0) {
      const randomIndex = Math.floor(Math.random() * contentInState.length);
      const todaysContent = contentInState[randomIndex];
      this.setState({ allTodaysContent: contentInState, currentContent: todaysContent });
    }
  }

  reset = () => {
    this.setState({ showContent: false, isLastContent: false });
  }

  render() {
    // show either the welcome screen or content view
    if (!this.state.isLastContent) {
      return (
        <Layout showHeader={this.state.showContent} reset={this.reset}>
          <Seo title="Home" />
          {
            this.state.showContent ?
              <main className="content">
                <DayContent
                  data={this.state.currentContent.node}
                  todayIs={this.state.todayIs}
                />
                <button id="" onClick={this.getRandomContent}>Show me another</button>
              </main>
            :
              <main>
                <h1>Um What Day Is It?</h1>
                <button id="" onClick={this.showContentView}>Let's find out</button>
              </main>
          }
        </Layout>
      )
    } else {
      // show out of content message
      return (
        <Layout showHeader={this.state.showContent} reset={this.reset} isLastContent={this.state.isLastContent}>
          <Seo title="Um What Day Is It" />
          <main className="end">
            <div className="end-container">
              <h2>Check back tomorrow and find out what day it is.</h2>
            </div>
          </main>
        </Layout>
      )
    }
  }
}

export default IndexPage;

// GraphQL query to our spreadsheet
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