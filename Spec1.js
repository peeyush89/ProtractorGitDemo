describe ('test suite 1', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('open website' , function () {   // it is test case name 
	// all the test cases code will be written into it
	//browser.waitForAngularEnabled(false);
	browser.get("https://angularjs.org");// it will open the URL on chrome browser

	browser.get("http://juliemr.github.io/protractor-demo/").then(function(){ // .then (function(){}) waits the browser to get the url and then execute the next steps which are written in functions


browser.sleep("5000");// to wait 
	console.log("success");// to print anything in console

	})

	
})


	it ('close the browser' , function() {
		
		
		// write code to close your browser
	})
	
	
	
	
})