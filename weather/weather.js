const request = require('request');

var key = 'e9164075d1f40ad93b12e564d7f960d7',  //dark sky api key
    lat = 29.6149269,
    lng = -95.2060879;

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to get your forecast. Try again later.');
    }
  });

};

module.exports.getWeather = getWeather;
