// Self invoking function

(function(){

	// Modernizr
	if (Modernizr.touch) {   
		console.log('Touch Screen');
		document.querySelector('body > nav').classList.add('show');  
	} else {   
		console.log('No Touch Screen');
		document.querySelector('body > nav').classList.add('hide');  
	} 
})(); 