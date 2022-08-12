const axios = require("axios");

const endpoint = "http://127.0.0.1:8000";

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