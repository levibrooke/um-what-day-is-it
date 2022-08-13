import React, { Component } from "react"

import SEO from "../components/seo"
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

    const data = this.props.pageContext.data;
    this.filterContent(data);
  }

  filterContent = (data) => {
    const dayOfWeek = this.state.todayIs.toUpperCase();

    // filter by day, only keep the day
    const filteredData = data.filter(content => content.dayOfWeek.toUpperCase() === dayOfWeek);

    // let's save all of today's content in state
    this.setState({ savedContent: filteredData });

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

  reset = () => {
    this.setState({ showContent: false, isLastContent: false });
    this.filterContent(this.state.savedContent);
  }

  render() {
    // show either the splash screen or content view
    if (!this.state.isLastContent) {
      return (
        <Layout showHeader={this.state.showContent} reset={this.reset}>
          <SEO title="Home" />
          {
            this.state.showContent ?
              <main className="content">
                <DayContent
                  data={this.state.currentContent}
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
          <SEO title="Um What Day Is It" />
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
