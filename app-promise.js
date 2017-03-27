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

// var lat = geocode.results.latitude,
//     lng = geocode.results.longitude;
