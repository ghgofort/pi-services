const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World!');
});


/** API endpoint for getting all items in the HPT_Readings collection. */
router.get('/hpt', (req, res, next) => {
   const firebaseService = require('./services/firebaseService');
   firebaseService.hpt().then((data) => {;const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World!');
});


/** API endpoint for getting all items in the HPT_Readings collection. */
router.get('/hpt', (req, res, next) => {
   const firebaseService = require('./services/firebaseService');
   firebaseService.hpt().then((data) => {;
      res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000, https://galengoforth.com');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.send(data);
  }).catch((e) => {
      console.log(e);
  }).finally(() => {
      next();
  });
});

module.exports = router;
      res.send(data);
  }).catch((e) => {
      console.log(e);
  }).finally(() => {
      next();
  });
});

module.exports = router;