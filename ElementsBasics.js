describe ('Protractor Element Demo', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('Locators' , function () {   // it is test case name 
	// all the test cases code will be written into it
	

	browser.get("http://juliemr.github.io/protractor-demo/");

     element(by.model("first")).sendKeys("5");
	   //browser.sleep(5000);// or we can defiune it in other way in terms of promise as JS is asynchronius, browser.sleep could get executed first

     element(by.model("second")).sendKeys("23");

		element(by.id("gobutton")).click();

		// find element by css (css : tagname[attribute='value'])

		//element(by.css("h2[class='ng-binding']")).getText();

	 element(by.css("h2[class='ng-binding']")).getText().then(function(text){// in protractor to use getText method, we need to resolve promise and pass a argument in function

		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("28");// jasmine takes care of promise resolving

		console.log(text);
	 })

   

	
})
})