// Self invoking function

(function(){

	// Modernizr
	if (Modernizr.touch) {   
		console.log('Touch Screen');  
	} else {   
		console.log('No Touch Screen');  
	} 
})(); 