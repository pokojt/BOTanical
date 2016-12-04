
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoid2hhdGV2ZXIiLCJpZCI6IjU4NDM3ZmI3MjgzYmViNWM2ZmQzYjUyYyIsInJvbGVzIjpbXSwiaWF0IjoxNDgwODE4NjE1fQ.VvF7hVcjbytG7fGlefRM8LeOeEye_ZbsjcAxBEy36Ds';

$(document).ready(function() {
	$('form.form-add-plant').submit(function() {


		$.ajax({
			headers: {
				Authorization: 'Bearer ' +  token
			},
			type: 'POST',
			contentType: 'application/json',
			url: 'localhost:8090/plants',
			data: JSON.stringify({name:'Fred', waterNeeds: 'high'})
		}).done(function(data) {
			console.log(data);
		}).fail(function(jqxhr, status) {
			console.log(status);
		});
	});

});