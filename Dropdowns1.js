describe ('All optmised', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces

	function Calculation (a,b,c){


 element(by.model("first")).sendKeys(a);

	 element(by.model("second")).sendKeys(b);
	 
element.all(by.tagName("option")).each(function(item) {

item.getAttribute("value").then(function(text){ 

		if (text==c)
		{
item.click();
			
		}
    

})
})

		element(by.id("gobutton")).click();
	}
	
it ('All Optimised' , function () {   // it is test case name 
	
	browser.get("http://juliemr.github.io/protractor-demo/");

	Calculation (2,5,"ADDITION");
	Calculation(10,2,"DIVISION");
	Calculation(2,10,"MODULO");

	element.all(by.repeater("result in memory")).each(function(item) {

      item.element(by.css("td:nth-child(3)")).getText().then(function(text){  
		console.log(text);

		})
	})
		

})
	})

