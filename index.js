/**
 * @fileoverview This file is the entry point for the application.
 */

// Setup Routes for express.
const routes = require('./routes');


// Import the express module.
const express = require('express'); 
// Create an instance of express.
const app = express();
// Start the server.

app.listen(3000, () => console.log('App Started...'));

app.use('/', routes);

module.exports = app;