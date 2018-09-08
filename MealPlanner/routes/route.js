// imported modules
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const MEAL = require('../models/meals');

// Get meals
ROUTER.get('/meals', (req, res, next)=>{
    MEAL.find(function(err, meals){
        res.json(meals);
    })
});

// Add meal
ROUTER.post('/meal', (req, res, next)=>{
    let newMeal = new MEAL({
        entree: req.body.entree,
        side: req.body.side,
        drink: req.body.drink
    })

    newMeal.save(function(err, meal){
        if(err)
        {
            res.json({msg: "Failed to add meal."});
        }
        else
        {
            res.json({msg: "Meal added successfully."});
        }
    });
});

// Delete meal
ROUTER.delete('/meal/:id',(req, res, next)=>{
    MEAL.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = ROUTER;