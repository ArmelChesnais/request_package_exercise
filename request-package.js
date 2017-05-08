var request = require('request');

request('https://sytantris.github.io/http-examples/', function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
});