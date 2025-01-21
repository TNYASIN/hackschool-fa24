const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const tripSchema = new mongoose.Schema({
    destination:{type: String},
    journalEntry: {type: String},
    startDate: {type: Date},
    endDate: {type: Date}

});

// Create a model for our trips based on the schema
const Trip = mongoose.model('Trip', tripSchema); // 'Trip' is the name of the model, and tripSchema is the schema


// Export model schema
module.exports = Trip;