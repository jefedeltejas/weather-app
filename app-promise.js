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
  console.log(response.data);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to that google API, G. Gonna halfta run a check on your request.');
  }
  console.log(e);
});



// var lat = geocode.results.latitude,
//     lng = geocode.results.longitude;
