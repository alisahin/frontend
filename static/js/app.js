// Self invoking function
(function(){

	// Modernizr
	if (Modernizr.touch) {

		// if touchScreen, add class active
		document.querySelector('body > nav').classList.add('active');
		console.log('Touch Screen');
	} else {
		
		// if not touchScreen, add class hidden
		document.querySelector('body > nav').classList.add('hidden');
		console.log('No Touch Screen');
	} 
})(); 