/**
 * Created by DeepBlue on 2015/11/24.
 */
var WomanCollection = require('./../models/WomanCollection.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/woman/create',function(req, res) {
    var woman = req.body;
    WomanCollection.create(woman);
    res.sendStatus(200);


});
router.post('/woman/retrieve/:id',function(req, res,next) {
    var id = req.params.id;
    if(id === 'all') {
        return next();
    }else {
        console.log("通过ID查询！");
    }

    res.sendStatus(200);


});
router.post('/woman/retrieve/all',function(req,res) {
    console.log("查询所有！");
    var datas = WomanCollection.findAll(function(docs) {
       res.send(docs);
    });
});
router.post('/woman/update/:id',function(req, res) {
    var id = req.params.id;
    var woman = req.body;

    WomanCollection.update(id,woman);
    res.send(woman);
});
router.delete('/woman/delete/:id',function(req,res) {
    res.sendStatus(200);
});

module.exports = router;