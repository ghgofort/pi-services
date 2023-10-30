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
    const responseData = new Map();
    if (data.length > 0) {
      // Loop through job experiences & add highlights array to each.
      data.forEach((jobExperience) => {
        jobExperience.highlights = [];
        responseData.set(jobExperience.ID, jobExperience);
      });
    }


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Now get the Highlights and add them to the response.
    firebaseService.getCollectionData('Highlights', params).then((highlights) => {
      if (highlights.length > 0) {
        // Add each highlight to the appropriate job experience.
        highlights.forEach((highlight) => {
          if (highlight.jobExperienceId && responseData.has(highlight.jobExperienceId)) {
            responseData.get(highlight.jobExperienceId).highlights.push(highlight);
          } 
        });
      } 
      res.send({ job_experience: Array.from(responseData.values()) });
    }).catch((e) => {
      console.log(e);
      res.sendStatus(500);
    }).finally(() => {
      next();
    });
  }).catch((e) => {
    console.log(e);
    res.sendStatus(500);
  });
});

module.exports = router;