const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/hpt', (req, res) => {
   const firebaseService = require('./services/firebaseService');
   res.send(firebaseService.hpt());
});

module.exports = router;