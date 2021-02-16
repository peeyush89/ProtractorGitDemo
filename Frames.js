describe ('Iframes', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('Getting text from an iframe' , function () {   // it is test case name 

browser.waitForAngularEnabled(false);

browser.driver.manage().window().maximize();
	browser.get("https://rahulshettyacademy.com/AutomationPractice/")

	
browser.switchTo().frame(0);

element(by.css("a[href*='sign_in']")).getText().then(function(text){

	console.log(text);
})

})
})