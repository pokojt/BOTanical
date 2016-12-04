// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */

"use strict" ;

// add any UPM requires that you need
require('./LightSensor.js');
var mraa = require("mraa") ;
// Load Grove module
var groveSensor = require('jsupm_grove');
//Create Buzzer instance
var upmBuzzer = require("jsupm_buzzer");// Initialize on GPIO 5
var myBuzzer = new upmBuzzer.Buzzer(5);
// Create the temperature sensor object using AIO pin 0
var temp = new groveSensor.GroveTemp(0);



// and the rest of your app goes here
//console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel?????

//Create Date instance
var date = new Date(); 

//Date and Time
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var fullDate = year + "." + month + "." + day + "." + hour + "." + min + "." + sec;

//Get instructions from DB on what to do at each Sections of the day
var morning = 1;
var afternoon = 2;
var night = 3;
var waterNow = 0; //set to 1 to turn on;
//Tempurature readings in celcius and fahrenheit
var celsius = temp.value();
var fahrenheit = celsius * 9.0/5.0 + 32.0;
console.log(celsius + " degrees Celsius, or " + Math.round(fahrenheit) + " degrees Fahrenheit");

//If temp reaches certain value DO SOMETHING
if (temp.value() > 22)
{
    console.log( myBuzzer.playSound(123, 50000) );
}

//Get light value from LightSensor.js
var luxValue = ls();
console.log("luxValue>>>>> " + luxValue);

//Get full date and time in the form of datetime and convert to military time - not necessary
console.log("DATETIME (yyyy.mm.dd.hh.mm.ss: " + fullDate);

var newDate = new Date();        
var jsonObj = JSON.stringify({light:luxValue, temp:celsius, date:newDate, name:"Fred", username:"freddy123"});
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = new XMLHttpRequest();
var url = "http://botanicaliot.herokuapp.com/plant-days";
//var params = JSON.stringify(JSONData);
http.open("POST", url, true);
//Send the proper header information along with the request
http.setRequestHeader("Content-Type", "application/json");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
        console.log("POST Success!!");
    }
    else
    {
        console.log("POST Failed. Http status: " + http.status)
    }
}
http.send(jsonObj);

myBuzzer.stopSound();
console.log("Buzzer Stopped!!");







