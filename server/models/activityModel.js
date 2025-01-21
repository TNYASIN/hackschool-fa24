const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const activitySchema = new mongoose.Schema({
    trip:{type: String},
    activitySpot: {type: mongoose.Schema.Types.ObjectId},
    rating: {type: String},
    review: {type: String}
});

// Create a model for our activity based on the schema


// Export model schema
module.exports = 'activitySchema';