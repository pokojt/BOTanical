var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoid2hhdGV2ZXIiLCJpZCI6IjU4NDM3ZmI3MjgzYmViNWM2ZmQzYjUyYyIsInJvbGVzIjpbXSwiaWF0IjoxNDgwODE4NjE1fQ.VvF7hVcjbytG7fGlefRM8LeOeEye_ZbsjcAxBEy36Ds';



$(document).ready(function() {

	$('.form-add-plant').hide();
	$('button#add-plant').click(function() {
		$('.form-add-plant').fadeIn();
		$(this).hide();
	});


	// function to display all plants in database on page
	$.ajax({
				headers: {
					Authorization: 'Bearer ' +  token
				},
				type: 'GET',
				contentType: 'application/json',
				url: '/plants',
				success: function(data) {
					var response = data;
					console.log(response);
					var plants = response.plants;
					console.log(plants);
					for(var i=0; i < plants.length; i++) {
						$("#plantList").append("<div id=v"+i+" class='plant-item'>" +
	                                  '<h3>' + plants[i].name + '</h3>' +
	                                  '<div class="plantInfo">' +
	                                  	'<p>' + plants[i].type + '</p>' +
	                                  	'<p>Water Needs:' + plants[i].waterNeeds + '</p>' +
	                                  	'<p>Light Needs:' + plants[i].lightNeeds + '</p>' +
	                                  	'<button class="water-btn">Water '+plants[i].name+'</button>' +
	                                  	'<br><button class="btn-primary back">Back to all Plants</button>' +
	                                  '</div>' +
	                              "</div>");
	     				console.log(plants[i].name);
	     				$('#v'+i).on('click', function() {
	     					var thisPlant = $(this).find('h3').text();
	     					console.log(thisPlant);
	     					$.ajax({
								headers: {
									Authorization: 'Bearer ' +  token
								},
								type: 'GET',
								contentType: 'application/json',
								url: '/plant-days/' + thisPlant,
								success: function(data) {
									var response = data;
									console.log('this is the response', response);
									
								}
							}).fail(function(jqxhr, status) {
								console.log(jqxhr);
								console.log(status);
							});
							$(this).siblings().fadeOut();
							$(this).children().fadeIn();
							$(this).addClass('expanded');
							$('button#add-plant').hide();
	     				});
					};
				}
			}).fail(function(jqxhr, status) {
				console.log(jqxhr);
				console.log(status);
			});

	$(document).on('click', '.back', function() {
		location.reload();
	});

	// funtion to add a new plant and save to database
	$('form.form-add-plant').submit(function() {
		event.preventDefault();

		var inputName = $('.nameInput').val();
		var inputType = $('.typeInput').val();
		var inputLight = $('.lightInput').val();
		var inputWater = $('.waterInput').val();
		console.log('running');

		$.ajax({
			headers: {
				Authorization: 'Bearer ' +  token
			},
			type: 'POST',
			contentType: 'application/json',
			url: '/plants',
			data: JSON.stringify({name:inputName, type: inputType, waterNeeds: inputWater,lightNeeds: inputLight})
		}).done(function(data) {
			console.log(data);
			$("#plantList").append("<div class='plant-item'>" +
	                                  '<h3>' + inputName + '</h3>' +
	                              "</div>");
		}).fail(function(jqxhr, status) {
			console.log(status);
		});


		$(".form-add-plant")[0].reset();
 		$(".form-add-plant").hide();
 		$('button#add-plant').show();

	});


});
