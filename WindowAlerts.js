describe ('Widnow Alerts', function(){  // describe is test suite name 
	// all the it blocks (test cases) will be written inside function curly braces
	
it ('handling window alerts' , function () {   // it is test case name 

browser.waitForAngularEnabled(false);
	browser.get("https://rahulshettyacademy.com/AutomationPractice/")

	
	element(by.id("confirmbtn")).click();

	//browser.switchTo().alert().dismiss().then(function(){// to click on cancel/no etc
	
		browser.switchTo().alert().accept().then(function(){ // to click on yes/ok etc
		browser.sleep(5000);

	})


})
})