/**
 * @fileoverview This file is the entry point for the application.
 */

// Setup Routes for express.
const routes = require('./routes');


// Import the express module.
const express = require('express'); 

function main() {
  // Create an instance of express.
  const app = express();

  // Setup the routes for the application.
  app.use('/', routes);

  // Start the server.
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
}

module.exports = main;