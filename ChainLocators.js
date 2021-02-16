describe ('chain locators', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('chain locators, css for identical tags and repeaters' , function () {   // it is test case name 
	
	browser.get("http://juliemr.github.io/protractor-demo/")

	//------------------- in this lectiure section 7, we will learn about repeaters, chain locators and css for identical tags-------------

 element(by.model("first")).sendKeys("5");
	   //browser.sleep(5000);// or we can defiune it in other way in terms of promise as JS is asynchronius, browser.sleep could get executed first

     element(by.model("second")).sendKeys("23");
          
		element(by.id("gobutton")).click();

		// if there are identical tags available, using this syntax, css can find the nth child
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){

		console.log(text);

		})

})

})