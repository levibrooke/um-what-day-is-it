const axios = require("axios");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const endpoint = process.env.ENDPOINT;

const getContent = () => {
  try {
    const content = axios.get(`${ endpoint }/api/content/`);
    return content;
  } catch (error) {
    console.error(error);
  }
}

// create page action
exports.createPages = async ({ actions: { createPage } }) => {
  const { data } = await getContent();

  createPage({
    path: "/",
    component: require.resolve("./src/templates/index.js"),
    context: { data }
  })
}