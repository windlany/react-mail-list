/* all data request */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = '../public/data.json';

router.get('/concats', (req, res, next)=> {
  fs.readFile(path, (err, data)=> {
    if(err) {
      return res.status(200).end('fail');
    }
    console.log(data);
    res.send(data);
  })
})

module.exports = router;
