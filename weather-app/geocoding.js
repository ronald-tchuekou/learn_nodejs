const request = require('postman-request')

const access_token = 'pk.eyJ1Ijoicm9uY29kZXIiLCJhIjoiY2t6ZjU5bmltMnAydzJwbnhsODhtMHIwZSJ9.fVKBAJHLCSPYD0fgU_5HDw';

module.exports = (search_query, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_query}.json?access_token=${access_token}`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Your arn\'t connected to the internet!')
        } else if (response.body.message) {
            console.log(response.body.message)
        } else {
            callback(response.body.features[0].center)
        }
    })
}