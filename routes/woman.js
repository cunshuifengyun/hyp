/**
 * Created by DeepBlue on 2015/11/24.
 */
var Woman = require('./../models/Woman.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/woman/new', function(req, res) {

});
router.post('/woman/modify', function(req, res) {

});

module.exports = router;