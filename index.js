/**
 * @fileoverview This file is the entry point for the application.
 */

// Setup Routes for express.
const routes = require('./routes');


// Import the express module.
const express = require('express'); 
// Create an instance of express.
const app = express();

// Setup the routes for the application.
app.use('/', routes);

module.exports = app;