// import dotenv
const dotenv = require('dotenv');


dotenv.config();

// create a config object with PORT 
const config = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}

/* const postActivity = async (req,res) => {
    const {activity} = res.body;
    const { destination, activitySpot, rating, review} = activity;
    if(!destination||!activitySpot||!rating){
        return res.status(400).json({error: `invalid request`});
    }
    res.status(200).json({activity});
} */



module.exports = config;