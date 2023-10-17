const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World!');
});


/** API endpoint for getting all items in the HPT_Readings collection. */
router.get('/hpt', (req, res, next) => {
  const firebaseService = require('./services/firebaseService');
  const params = req.query;

  firebaseService.getCollectionData('HPT_Readings', params).then((data) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.send(data);
  }).catch((e) => {
    console.log(e);
  }).finally(() => {
    next();
  });
});

/** API endpoint for getting all items in the Job_Experiences collection. */
router.get('/Job_Experiences', (req, res, next) => {
  const firebaseService = require('./services/firebaseService');
  const params = req.query;

  firebaseService.getCollectionData('JobExperiences', params).then((data) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
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