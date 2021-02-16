describe ('Actions Demo', function(){  
	
it ('open website' , function () {   
	
browser.waitForAngularEnabled(false);
	browser.get("https://rahulshettyacademy.com/AutomationPractice/");

	browser.actions().mouseMove(element(by.id("autocomplete")).sendKeys("India")).perform()
 
	//browser.actions().keyDown(protractor.Key.SHIFT).perform();
	

   browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform().then(function(){

browser.sleep(5000);
   })
   
  browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
  console.log("selected")

  })


  //browser.performActions(Key.ARROW_DOWN);
  //browser.sleep(5000);
        //browser.performActions(Key.ENTER);





	
})
	
})