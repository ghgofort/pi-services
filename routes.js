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
router.get('/job_experience', (req, res, next) => {
  const firebaseService = require('./services/firebaseService');
  const params = req.query;

  firebaseService.getCollectionData('Job_Experiences', params).then((data) => {
    // Now get the Highlights and assign them to the appropriate Job Experience.
    firebaseService.getCollectionData('Highlights', params).then((highlights) => {
      data.forEach((jobExperience) => {
        jobExperience.highlights = [];
        highlights.forEach((highlight) => {
          if (highlight.jobExperienceId === jobExperience.id) {
            jobExperience.highlights.push(highlight);
          }
        });
      });
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.send(data);
    }).catch((e) => {
      console.log(e);
    }).finally(() => {
      next();
    });

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