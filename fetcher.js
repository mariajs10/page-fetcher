const request = require('request');
var fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  if (response.statusCode === 200) {
    fs.writeFile(path, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  } else {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  }
 
  
});