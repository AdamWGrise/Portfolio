var nasaApiKey = '5BP4jRWz6oHxG11XrKhpObCRFJ5HleSkcKmY6jTJ' // Adam's API key
var nasaBgURL = 'https://api.nasa.gov/planetary/apod?api_key=' + nasaApiKey;

// This is just the function that runs when the page loads to get a background image for the page.
var nasaBg = function () {
	$.ajax({
		url: nasaBgURL,
		method: "GET"
	}).then(function (response) {
		console.log('====== BACKGROUND IMAGE RESPONSE =======');
		console.log(response);
		$('#bgDiv').css('background-image', 'url(' + response.url + ')');
		// temp image if the API isn't working:
		// $('#bgDiv').css('background-image','url(assets/images/bgTEST.jpg)');
	});
};

$(document).ready(function () {
	nasaBg();
});