var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');

router.get('/', function (req, res) {
  // if the user has a session
  if (req.session.user) {
    // serve the dashboard
    res.sendFile(path.join(__dirname, '/../../client/dashboard.html'));
    // if the user doesn't have a session
  } else {
    // serve the landing page
    res.sendFile(path.join(__dirname, '/../../client/landing.html'));
  }
});

// queries database and returns user's album entries
router.get('/querydb', function (req, res) {

});

// post new album to the database
router.post('/querydb', function (req, res) {

});

module.exports = router;
