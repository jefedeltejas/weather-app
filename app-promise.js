const yargs = require('yargs'),
      axios = require('axios'),
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

var encodedAddr = encodeURIComponent(argv.address);
var geocodUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;

axios.get(geocodUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Sorry player, can\'t find that address fo ya.');
  }

  var key = 'e9164075d1f40ad93b12e564d7f960d7',  //dark sky api key
      lat = response.data.results[0].geometry.location.lat,
      lng = response.data.results[0].geometry.location.lng,
      weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temp = response.data.currently.temperature,
      feelsLike = response.data.currently.apparentTemperature;
      console.log(`It's currently ${temp}  It feels like ${feelsLike}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to that google API, G. Gonna halfta run a check on your request.');
  } else {
      console.log(e.message);
  }
});



// var lat = geocode.results.latitude,
//     lng = geocode.results.longitude;
