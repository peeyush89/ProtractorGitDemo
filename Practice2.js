describe('Practice Exercise', function () {

	function selectItems(products) {

		element.all(by.tagName("app-card")).each(function (item) {

			item.element(by.css("h4[class='card-title'] a")).getText().then(function (text) {

				console.log(text);

				if (text == text) {

					item.element(by.css("button[class='btn btn-info']")).click();
				}
			})
		})
	}

	it('Form Automation', function () {

		browser.driver.manage().window().maximize();

		browser.get("https://qaclickacademy.github.io/protocommerce/");


		element(by.linkText("Shop")).click();

		selectItems("iphone X");
		selectItems("Samsung Note 8");

		element(by.partialLinkText("Checkout")).getText().then(function (text) {

			console.log(text);

			var res = text.split("(");

			expect(res[1].trim().charAt(0)).toBe("8");
		})

		element(by.partialLinkText("Checkout")).click();
		browser.sleep(5000);

		//element(by.css("table[class='table table-hover']")).each(function (item) {

		//item.element(by.css("tr")).getText().then(function(text){
		//item.element(by.css("td[class='col-sm-1 col-md-1 text-center']")).getText().then(function(cost){


		//element.all(by.css("td:nth-child(4)")).getText().then(function (text) {
		element.all(by.css("tr>td:nth-child(4)>strong")).getText().then(function (text) {
			var res=text.split("₹.");
			var res1=Number(res[1].trim());
			adition = addition+res1;
		
			console.log(text);
			console.log(res1);

		})
		element.all(by.css("tr>td:nth-child(4)>strong")).count().then(function (text) {

			console.log(text);
		})

		element(by.css("td[class='text-right'] h3")).getText().then(function (total) {

			console.log(total);
		})


	})


})



