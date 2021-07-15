const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes'); //routes will look in folder for index.js file

let app = express();

//Middleware
app.use(cors());
app.use(express.json()); 
//bodyparser middleware that parses JSON content posted to our api, so we can use JSON content like a JS object

app.use('/api', apiRouter);
//want to use this middleware router on the /api route (which is going to be the index.js file)

app.listen(3000);