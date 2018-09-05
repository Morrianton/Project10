// importing modules
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');


let app = express();

// port #
const PORT = 3000;

app.listen(PORT,()=>{
  console.log("Server started at port:" + " " + PORT);
});
