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



