exports.Plant = function(name,type){
  this.name = name;
  this.type = type;
};

// exports.Plant.prototype.method = function() {
//
// };

var firebase = require('firebase');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "botanical-9768b.firebaseapp.com",
  databaseURL: "https://botanical-9768b.firebaseio.com",
  storageBucket: "gs://botanical-9768b.appspot.com",
};
firebase.initializeApp(config);


/* functional backend code goes in this file */
