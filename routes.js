const router = require('express').Router();

router.route("timestamp/:date_string?").get((req,res) => {
    let date_string = req.params.date_string;
  
    let date = new Date(date_string);
  
    if(date) {
      res.json({"unix": date.getTime(), "utc" : date.toUTCString()})
    }else {
      res.json({"error": "Invalid Date"})
    }
  
  })


  module.exports = router;