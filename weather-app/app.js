const geocoding = require('./geocoding');
const forcast = require('./forcast');

const address = process.argv[2] // node app.js cameroon

if (!address) {
    console.log('Please provide an address!')
} else {
    geocoding(address, (response) => {
		let latitude = response[0];
		let longitude = response[1];
		console.log('L : ', latitude, 'l : ', longitude);
		forcast(latitude, longitude, (response) => {
			console.log(response);
		});
	});
}