exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub', //address of the selenium server
		specs: ['Practice2.js'], //spec name which needs to be executed

		capabilities: {
	browserName : 'chrome',
	//firefoxPath: '/Applications/firefox.exe',
	'goog:chromeOptions': {
		w3c: false
	},
    acceptInsecureCerts : true
}
		
};	