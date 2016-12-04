// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */

"use strict" ;
require('./LightSensor.js');
//require('./motor.js');
var mraa = require("mraa") ;

// add any UPM requires that you need
// and the rest of your app goes here
// see the samples for more detailed examples

console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel

var upmBuzzer = require("jsupm_buzzer");// Initialize on GPIO 5
var myBuzzer = new upmBuzzer.Buzzer(5);
var date = new Date(); 

console.log("Date and Time:");
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
console.log(" " + year + " " + month + " " + day + " " + hour);

//Sections of the day
var morning = 1;
var afternoon = 2;
var night = 3;
var waterNow = 0; //set to 1 to turn on;

// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the temperature sensor object using AIO pin 0
var temp = new groveSensor.GroveTemp(0);
console.log(temp.name());

// Read the temperature ten times, printing both the Celsius and
// equivalent Fahrenheit temperature, waiting one second between readings
var i = 0;
var waiting = setInterval(function() {
            var celsius = temp.value();
            var fahrenheit = celsius * 9.0/5.0 + 32.0;
            console.log(celsius + " degrees Celsius, or " +
                Math.round(fahrenheit) + " degrees Fahrenheit");
            if (temp.value() > 22)
            {
                //Play sound for one second = 100000
                console.log( myBuzzer.playSound(123, 50000) );
            }
            //Get full date and time in the form of datetime and convert to military time
            i++;
            if (i == 5) clearInterval(waiting);
        }, 1000);


// Print message when exiting
process.on('SIGINT', function()
{
	console.log("Exiting...");
	process.exit(0);
});

var someVal = ls();
console.log("someVal>>>>> " + someVal);