var Plant = require('../js/backend.js').Plant;

$(document).ready(function() {
		$('.form-add-plant').hide();

	$('button#add-plant').click(function() {
		$('.form-add-plant').show();
	});

	$('button#submit-plant').submit(function() {
		event.preventDefault();

		var inputName = $('').value();
		var inputType = $('').value();
		var newPlant = new Plant();

		newPlant(inputName, inputType);
		
	});

});



