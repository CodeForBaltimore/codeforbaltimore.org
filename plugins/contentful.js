// ./plugins/contentful.js

const contentful = require('contentful')
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

const client = contentful.createClient(config);

export default client;