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
		wallpapers.push(response.url);
		console.log(wallpapers);
		// temp image if the API isn't working:
		// $('#bgDiv').css('background-image','url(assets/images/bgTEST.jpg)');
	});
};

var wallpapers = ['assets/images/nebula.png'];

$(document).ready(function () {
	startSlideshow();
	displayImage();
	nasaBg();
});


var showImage;
var count = 0;

function displayImage() {
	$("#bgDiv").css('background-image', 'url(' +  wallpapers[count] + ')');
}

function nextImage() {
	count++;
	setTimeout(displayImage, 30000);

	if (count === wallpapers.length) {
		count = 0;
	}
}

function startSlideshow() {
	showImage = setInterval(nextImage, 30000);
}

function stopSlideshow() {
	clearInterval(showImage);
}