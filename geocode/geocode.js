const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddr = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to the great Google.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Address not found ?!?');
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
