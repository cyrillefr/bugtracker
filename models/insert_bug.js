var btConfig = require('../conf/config.js');

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format
     , assert = require('assert');


var insertBugDB = function (newBug, callback){
    console.log('Connect to DB: ' + btConfig.getProperty('DB_CONNECTION_STRING'));
    
    MongoClient.connect(btConfig.getProperty('DB_CONNECTION_STRING'), function(err, db) {

        if(err) throw err;
 
        var collection = db.collection('bugs');

        collection.insert([
            newBug
                ], function(err, result) {
                console.log("Inserted 1 bug into the bugs collection");

                if(callback !== undefined && typeof callback === 'function') {
                   callback(result);   
                }
                else {
                    console.log('something wrong with argument callback: undefined callback or not a function');
                }
             
            });
    });
}



exports.insertBug = function (newBug, res){
    //send JSON response      
    insertBugDB(newBug,
        function(data){
            res.json(data)
    });
    
};




