function preloadImages() {
	for(i = 0; i < 12; i++) {
		var img = new Image();
		img.src = "img/mainbanner/" + (i + 1) + ".jpg";
	}
}

preloadImages();

function animBanner(index) {
	if(index > 12)
		index = 1;
	
	$("#imgMainBanner").prop("src", "img/mainbanner/" + index + ".jpg");
	setTimeout(function() { animBanner(index + 1); }, 1000 + ([ 3, 7, 11 ].indexOf(index) >= 0 ? 1000 : 0));
}