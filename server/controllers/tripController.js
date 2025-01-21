/** const getTrip = async (req, res) => {
    // We don't have a database yet, so we'll hard-code a trip to return.
    const trip = [
        {
            destination: 'Paris',
            startDate: '2024-08-01',
            endDate: '',
            journalEntry: 'Had a wonderful time visiting the Eiffel Tower and the Louvre.'
        }
    ];

    res.status(200).json(trip);
}

const getTripName = async (req, res) => {
   /*
    Create a GET route that accepts a trip’s name as a query parameter and responds with a unique message.
    Check for the name query parameter.
    Respond with a JSON object that says "We are going to [name]."
   
    const name = req.query.name; 
    if(!name){
        res.status(200).json({message: `sorry query parameter required`});
    }
    res.status(200).json({message: `we are going to ${name}.`});

}

module.exports = { getTrip, getTripName }; 

const Trips = require('../models/tripModel');

// Create a GET async function to get all trips using the trip model schema
const getTrip = async (req, res) => {
    const trip = await req.trip;
    res.status(200).json(trip);
}

// Create a POST async function to add a trip using the trip model schema
const postTrip = async (req, res) => {
    // Extracts specific fields from the request body of our trip model schema
    
    
    // Check for missing required fields and return an error if any required field is absent
    const { Trip } =  req.body;
    const { destination, journalEntry, startDate, endDate } = Trip;
    if(!destination||!journalEntry||!startDate||!endDate)
        return res.status(200).json({error: 'Invalid request'});

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) 
        return res.status(400).json({ error: 'End date must be after start date' });
    else{
        const nextTrip = await Trips.create(Trip);
        res.status(200).json(nextTrip);
    }
    
   
    // Create a new trip entry in the database and return it as a JSON response
  
    
    
}


module.exports = { getTrip, postTrip }; */
const Trips = require('../models/tripModel');

// Create a GET async function to get all trips using the trip model schema
const getTrip = async (req, res) => {
    const trip = await Trips.find();
    res.status(200).json(trip);
}

// Create a POST async function to add a trip using the trip model schema
const postTrip = async (req, res) => {
    const { destination, startDate, endDate, journalEntry } = req.body;

    if (!destination || !startDate || !journalEntry) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    }
    else {
        const newTrip = await Trips.create(req.body);
        res.status(200).json(newTrip);
    }
}

module.exports = { getTrip, postTrip };
