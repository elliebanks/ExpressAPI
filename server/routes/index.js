const express = require('express');
const chirpsRouter = require('./chirps'); //importing chirps


//creating a new route
let router = express.Router(); 
//adding routes to the router above ^
router.use('/chirps', chirpsRouter); 


//exporting router
module.exports = router;