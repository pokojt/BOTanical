////////////////////////////////////////////////
//Light Sensor
///////////////////////////////////////////////
// Load Grove module
var groveSensor = require('jsupm_grove');

ls = function (){
    // Create the light sensor object using AIO pin 0
    var light = new groveSensor.GroveLight(1);

    // Read the input and print both the raw value and a rough lux value,
    //Go here to reference expected lux values under different daylight conditions: https://en.wikipedia.org/wiki/Daylight
    console.log(light.name() + " raw value is " + light.raw_value() + ", which is roughly " + light.value() + " lux");
    var value = light.value();

    return value;
}
