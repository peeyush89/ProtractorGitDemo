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


		element.all(by.tagName("option")).each(function(item) {

      item.getAttribute("value").getText().then(function(text){  // this will get the text from the value attribute under all the option tags

		console.log(text);


		 })
		item.getAttribute("value").then(function(text){  // this will print the text from the value attribute 

		console.log(text);


})

})


})
})