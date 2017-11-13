const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Client = require("./Client")
const jwtCheck = require("../utils/jwtCheck.js")

router.get("/all", jwtCheck, (req, res)=> {
  Client.find()
  .exec((err, result)=> {
      if (err){
        console.log(err)
      } else {
        res.send(result);
        console.log(result);
      }
    })
});

module.exports = router
