 /** const getActivity = async (req, res) => {
    const activity = [
        {
            destination: 'Paris',
            activitySpot: 'Louvre Museum',
            rating: '4',
            review: 'Visiting the Louvre was an unforgettable experience!'
        }
    ];

    res.status(200).json(activity);
}

const postActivity = async (req, res) => {
    /*
    This controller should retrieve the activity object from the request body (req.body.activity).
    Check for the following properties: destination, activitySpot,rating.
    See if destination, activitySpot, and rating exist.
    If not, send an error response back to the client.
    Otherwise, send a success response back to the client.
    Return a JSON object containing the activity data.
    
}

module.exports = { getActivity, postActivity }; 

const Activities = require("../models/activityModel");

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
    const Activity = await Activities.find().populate('trip', 'destination');
    res.status(200).json(Activity);
}

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
    // Extracts specific fields from the request body of our activity model schema
    
    const {trip, activitySpot, rating, review } = req.body;
    // Check for missing required fields and return an error if any required field is absent
    if(!trip|| !activitySpot|| !rating)
        return res.status(400).json({error: 'Invalid request'});

    // Creates a tripId associated with this activity
    const tripId = mongoose.Types.ObjectId.createFromHexString(trip);

    // Create a new activity entry in the database and return it as a JSON response
    const newActivity = await Activities.create({
        trip : tripId,
        activitySpot,
        rating,
        review
    })
    res.status(200).json(newActivity);
} */

module.exports = { getActivity, postActivity };

const mongoose = require('mongoose');
const Activities = require("../models/activityModel");

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
    const activity = await Activities.find().populate('trip', 'destination');
    res.status(200).json(activity);
}

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
    const { trip, activitySpot, rating, review } = req.body;

    if (!trip || !activitySpot || !rating) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const tripId = mongoose.Types.ObjectId.createFromHexString(trip);

    const newActivity = await Activities.create({
        trip: tripId,
        activitySpot,
        rating,
        review
    });
    res.status(200).json(newActivity);
}

module.exports = { getActivity, postActivity };