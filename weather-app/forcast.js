const request = require('postman-request');

const access_key = '85017413bea94ee5a20e81eada750722';

module.exports = (latitude,longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
			console.log("Your arn't connected to the internet!");
		} else if (response.body.error) {
			console.log(response.body.error.info);
		} else {
			callback(response.body.current);
		}
    });
};
