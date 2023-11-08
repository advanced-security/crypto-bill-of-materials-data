const {
  createProbot,
  createAzureFunction,
} = require("@probot/adapter-azure-functions");
const app = require("../dist/index");

module.exports = createAzureFunction(app, { probot: createProbot() });