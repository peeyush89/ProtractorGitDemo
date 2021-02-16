describe ('Synchronization Demo', function(){  
	
it ('Non-Angular Website Sync' , function () {  

browser.waitForAngularEnabled(false);

browser.driver.manage().window().maximize();
	browser.get("https://www.itgeared.com/demo/1506-ajax-loading.html");

	element(by.css("a[href='javascript: void(0);loadAjax();']")).click();

	var EC = protractor.ExpectedConditions;

	browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);

	element(by.id("results")).getText().then(function(result){
  console.log(result);

	})

	


})
})