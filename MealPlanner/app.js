// imported modules
const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');
const PATH = require('path');


const APP = EXPRESS();
const ROUTE = require('./routes/route');

// connect to MongoDB
MONGOOSE.connect('mongodb://localhost:27017/MealPlanner');

// on connection
MONGOOSE.connection.on('connected', ()=>{
  console.log("Connected to database MongoDB @ 27017");
});

// on error
MONGOOSE.connection.on('error', (err)=>{
  if(err)
  {
    console.log("Error in database connection: " + err);
  }
});

// port #
const PORT = 3000;

// middleware
APP.use(CORS());
APP.use(BODY_PARSER.json());

APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));
APP.use('/api', ROUTE);

APP.get('/', (req, res)=> {
  res.send('foo-bar');
})

// server listen on designated port
APP.listen(PORT,()=>{
  console.log("Server started at port:" + " " + PORT);
});
