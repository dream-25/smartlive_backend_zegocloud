const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const { generateToken04 } = require('./server/zegoServerAssistant');


var APP_ID = "1556166315";
var SERVER_SECRET = "207b0e92f0ca55fd9e2a93fceb32bfc6";


function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

var generateAccessToken = function (req, resp) {
  resp.header('Access-Control-Allow-Origin', "*")

  var expiredTs = req.query.expired_ts;
  if (!expiredTs) {
      expiredTs = 3600;
  }

  var uid = req.query.uid;
  if (!uid) {
      return resp.status(500).json({ 'error': 'user id is required' });
  }

  const token =  generateToken04(parseInt(APP_ID), uid, SERVER_SECRET, parseInt(expiredTs), '');
  return resp.json({ 'token': token });
};

app.get('/access_token', nocache, generateAccessToken);



app.listen(8800, () => {
  console.log("Backend server is running!");
});
