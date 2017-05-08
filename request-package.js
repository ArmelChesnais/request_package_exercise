var request = require('request');
var fs = require('fs');

var total = 0;

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode,'\nContent type:', response.headers['content-type']);
       })
       .on('data', (data) => {
          total += data.length;
          console.log('Downloading file, ' + total + " bytes total");
       })
       .on('end', () => {
          console.log("download complete!");
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?