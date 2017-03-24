const utils = require('utils'),
      yargs = require('yargs'),
      geocode = require('./geocode/geocode'),
      weather = require('./weather/weather'),
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

// var lat = geocode.results.latitude,
//     lng = geocode.results.longitude;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`The current temp: ${weatherResults.temp}  It feels like: ${weatherResults.feelsLike}`);
        // console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    });
  }
});

// console.log(argv);
