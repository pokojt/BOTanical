(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Plant = function(name,type,lightNeeds,waterNeeds,currentTemperature,currentLight,currentMoisture,schedule){
  this.name = name;
  this.type = type;
  this.lightNeeds = lightNeeds;
  this.waterNeeds = waterNeeds;
  this.currentTemperature = currentTemperature;
  this.currentLight = currentLight;
  this.currentMoisture = currentMoisture;
  this.schedule = schedule;
};

// exports.Plant.prototype.method = function() {
//
// };



/* functional backend code goes in this file */

},{}],2:[function(require,module,exports){
var Plant = require('../js/backend.js').Plant;

$(document).ready(function() {
	$('.form-add-plant').hide();

	$('button#add-plant').click(function() {
		$('.form-add-plant').show();
	});

	$('form.form-add-plant').submit(function() {
		event.preventDefault();

		var inputName = $('.nameInput').val();
		var inputType = $('.typeInput').val();
		var inputLight = $('.lightInput').val();
		var inputWater = $('.waterInput').val();

		var newPlant = new Plant(inputName, inputType, inputLight, inputWater);

		var db = firebase.database();
		var ref= db.ref(inputName);
		ref.set({name:inputName, type:inputType,lightNeeds:inputLight,waterNeeds:inputWater,currentTemperature:null,currentLight:null,currentMoisture:null,schedule:null});


   		$(".form-add-plant")[0].reset();
   		$(".form-add-plant").hide();
		
	});

});




},{"../js/backend.js":1}]},{},[2]);
