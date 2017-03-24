// const utils = require('utils'),
//       yargs = require('yargs'),
//       geocode = require('./geocode/geocode'),
//       argv = yargs.options({
//         a: {
//           demand: true,
//           alias: 'address',
//           describe: 'Address to fetch weather for',
//           string: true
//         }
//       })
//       .help()
//       .alias('help', 'h')
//       .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// console.log(argv);


const request = require('request');

var key = 'e9164075d1f40ad93b12e564d7f960d7',  //dark sky api key
    lat = 29.6149269,
    lng = -95.2060879;

request({
  url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to get your forecast. Try again later.');
  }
});
