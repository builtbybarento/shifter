const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
  res.send("Does this work?")
})

module.exports = router;