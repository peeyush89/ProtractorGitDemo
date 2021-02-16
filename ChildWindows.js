describe ('Child widnows ', function(){  
	
it ('handling child window' , function () {   
	
browser.waitForAngularEnabled(false);
	browser.get("https://rahulshettyacademy.com/AutomationPractice/");

	element(by.css("a[id='opentab']")).click();

	

	browser.getAllWindowHandles().then(function(handles){

	browser.switchTo().window(handles[1]);

	browser.getTitle().then(function(title){

  console.log(title);
	})
	
browser.sleep(5000);

	})

})

})