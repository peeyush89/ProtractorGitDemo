describe ('Practice Exercise', function(){  


it ('Form Automation' , function () {   

    browser.driver.manage().window().maximize();

	browser.get("https://qaclickacademy.github.io/protocommerce/");


	element(by.name("name")).sendKeys("Peeyush");
	element(by.css("input[name='email']")).sendKeys("peeyush@yopmail.com");
	element(by.id("exampleInputPassword1")).sendKeys("password");
	element(by.id("exampleCheck1")).click();
	element.all(by.id("exampleFormControlSelect1")).last().click();

	element.all(by.css("div[class='form-check form-check-inline")).each(function(item){
    item.element(by.css("label[class='form-check-label'")).getText().then(function(text){
		console.log(text);
if (text=="Employed"){

	item.click();
}
browser.sleep(3000);
	})
})

	//element.all(by.name("inlineRadioOptions")).first().click();
	element(by.css("input[name='bday']")).sendKeys("01/01/2000");
	element(by.buttonText("Submit")).click().then(function(){

		element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(text){

console.log(text);
		})
	})

	element(by.name("name")).clear();
	element(by.name("name")).sendKeys("P").then(function(){

		element(by.css("div[class='alert alert-danger'")).getText().then(function(text){

			console.log(text);
		})
	
	})

	})
	


		
	})
	
	

	
	
	
	
