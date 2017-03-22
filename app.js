const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=12301%20kurland%20drive%20houston',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
