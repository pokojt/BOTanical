
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoid2hhdGV2ZXIiLCJpZCI6IjU4NDM3ZmI3MjgzYmViNWM2ZmQzYjUyYyIsInJvbGVzIjpbXSwiaWF0IjoxNDgwODE4NjE1fQ.VvF7hVcjbytG7fGlefRM8LeOeEye_ZbsjcAxBEy36Ds';


$('form').on('submit', function(event) {
	event.preventDefault();
	var data = JSON.stringify({name: 'Fred', waterNeeds: 'high'});
	$.ajax({
		url: 'http://localhost:8090/plants',
		type: 'GET',
		// contentType: 'application/json',
		headers: {
			Authorization: 'Bearer ' +  token
		},
		// data: data,
		success: function(data) {
			console.log(data);
		}
	}).fail(function(jqxhr, status) {
		console.log(jqxhr);
		console.log(status);
	});
});