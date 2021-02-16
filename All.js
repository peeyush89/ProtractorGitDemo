describe ('all', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('all' , function () {   // it is test case name 
	
	browser.get("http://juliemr.github.io/protractor-demo/")

	//------------------- in this lectiure section 7, we will learn about repeaters, chain locators and css for identical tags-------------

 element(by.model("first")).sendKeys("5");
	   //browser.sleep(5000);// or we can defiune it in other way in terms of promise as JS is asynchronius, browser.sleep could get executed first

     element(by.model("second")).sendKeys("23");

		element(by.id("gobutton")).click();

		 element(by.model("first")).sendKeys("50");
	   //browser.sleep(5000);// or we can defiune it in other way in terms of promise as JS is asynchronius, browser.sleep could get executed first

     element(by.model("second")).sendKeys("22");

		element(by.id("gobutton")).click();


		 element(by.model("first")).sendKeys("15");
	   //browser.sleep(5000);// or we can defiune it in other way in terms of promise as JS is asynchronius, browser.sleep could get executed first

     element(by.model("second")).sendKeys("3");

		element(by.id("gobutton")).click();

		
		element.all(by.repeater("result in memory")).count().then(function(text){   // to find and print the number of count based on repeater "result in memory"

		console.log(text);

		})


		element.all(by.repeater("result in memory")).each(function(item) {

      item.element(by.css("td:nth-child(3)")).getText().then(function(text){   // this will find all the repeaters with 'result in memory' and then find 3rd chule od td under repeater and print the text

		console.log(text);

		})


		})
//--------------------- if only first element needs to be printed from the parent tags, it could be written like below as well---------------------
		element.all(by.repeater("result in memory")).first().element(by.css("td:nth-child(3)")).getText().then(function(text){   

		console.log(text);

		})

})

})