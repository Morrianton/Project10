// included modules
const  MONGOOSE = require('mongoose');

// mongoose schemas
const MEAL_SCHEMA = MONGOOSE.Schema({
    entree: {
        type: String,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    drink: {
        type: String,
        required: true
    }
});


const MEAL = module.exports = MONGOOSE.model('meal', MEAL_SCHEMA);