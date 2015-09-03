var properties = {};
var DB_TYPE = 'mongodb';
var URL_DB = '127.0.0.1';
var PORT = '27017';
var BUGTRACKER_DB = 'bugtracker';
properties.DB_CONNECTION_STRING = DB_TYPE + '://' + URL_DB + ':' + PORT + '/' + BUGTRACKER_DB; 

exports.getProperty = function (propertyName) {
  return properties[propertyName];
};
