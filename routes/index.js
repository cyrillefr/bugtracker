var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('./public/index.html');
});

//Use express router for all calls to db
//Templates are routed by Angular router
router.get('/models/bugs_list.js', function(req, res, next) {

    //model
    var bug_list = require('../models/bugs_list.js');

    //pass res to write json to res
   bug_list.getBugsCollection(res);

});

router.post('/models/insert_bug.js', function(req, res, next) {

    //receive JSON
    var newBug = req.body;

    //model
    var insert_bug = require('../models/insert_bug.js');

    insert_bug.insertBug(newBug, res);


});

//Projets list
router.get('/models/projects_list.js', function(req, res, next) {

    //model
    var project_list = require('../models/projects_list.js');

    //pass res to write json to res
   project_list.getBugsCollection(res);

});



module.exports = router;
