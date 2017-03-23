const request = require('request'),
      utils = require('utils'),
      yargs = require('yargs'),
      argv = yargs.options({
        a: {
          demand: true,
          alias: 'address',
          describe: 'Address to fetch weather for',
          string: true
        }
      })
      .help()
      .alias('help', 'h')
      .argv;

console.log(argv);

var encodedAddr = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to the great Google.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Address not found ?!?');
  } else if (body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
