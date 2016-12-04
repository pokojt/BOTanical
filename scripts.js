
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoid2hhdGV2ZXIiLCJpZCI6IjU4NDM3ZmI3MjgzYmViNWM2ZmQzYjUyYyIsInJvbGVzIjpbXSwiaWF0IjoxNDgwODE4NjE1fQ.VvF7hVcjbytG7fGlefRM8LeOeEye_ZbsjcAxBEy36Ds';

$(document).ready(function() {
	$('.form-add-plant').hide();
	$('button#add-plant').click(function() {
		$('.form-add-plant').show();
		$(this).hide();
	});

	// function for retrieving data from database and displaying on page
	// $.get({
	// 		headers: {
	// 			Authorization: 'Bearer ' +  token
	// 		},
	// 		type: 'GET',
	// 		contentType: 'application/json',
	// 		url: '/plants',
	// 		data: JSON.stringify({name:'Fred', waterNeeds: 'high'})
	// 	}).done(function(data) {
	// 		console.log(data);
	// 	}).fail(function(jqxhr, status) {
	// 		console.log(status);
	// 	});

	// $('#plantList').append()

	$('form.form-add-plant').submit(function() {
		event.preventDefault();

		// var inputName = $('.nameInput').val();
		// var inputType = $('.typeInput').val();
		// var inputLight = $('.lightInput').val();
		// var inputWater = $('.waterInput').val();
		console.log('running');

		$.ajax({
			headers: {
				Authorization: 'Bearer ' +  token
			},
			type: 'POST',
			contentType: 'application/json',
			url: '/plants',
			data: JSON.stringify({name:'Fred', waterNeeds: 'high'})
		}).done(function(data) {
			console.log(data);
		}).fail(function(jqxhr, status) {
			console.log(status);
		});


		$(".form-add-plant")[0].reset();
 		$(".form-add-plant").hide();
 		$('button#add-plant').show();
	});

});