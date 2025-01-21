const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController');
const activityController = require('../controllers/activityController');

// Add API routes for trips
router.get('/trip', tripController.getTrip);  // Get all trips
router.post('/trip', tripController.postTrip);  // Create a new trip

// Add API routes for activities
router.get('/activity', activityController.getActivity);  // Get all activities
router.post('/activity', activityController.postActivity);  // Create a new activity

module.exports = router;
