describe ('All optmised', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces

	function Add (a,b){


 element(by.model("first")).sendKeys(a);

     element(by.model("second")).sendKeys(b);

		element(by.id("gobutton")).click();
	}
	
it ('All Optimised' , function () {   // it is test case name 
	
	browser.get("http://juliemr.github.io/protractor-demo/")

	Add (2,3);
	Add(4,5);
	Add (7,10);

		
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