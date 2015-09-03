var btConfig = require('../conf/config.js');

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format
    , assert = require('assert');


var myBugsCollection = function (callback){
    console.log('Connect to DB: ' + btConfig.getProperty('DB_CONNECTION_STRING'));
    
    MongoClient.connect(btConfig.getProperty('DB_CONNECTION_STRING'), function(err, db) {

        if(err) throw err;
 
        var collection = db
            .collection('bugs')
            .find({})
            .limit(10)
            .toArray(function(err, docs) {
                console.dir(docs);

                if(callback !== undefined && typeof callback === 'function') {
                    callback(docs);     
                }
                else {
                    console.log('something wrong with argument callback: undefined callback or not a function');
                }
            });
    });

}

exports.getBugsCollection = function (res){
    //send JSON response      
    myBugsCollection(
        function(data){
            res.json(data)
    });
    
};


