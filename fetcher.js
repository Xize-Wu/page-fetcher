const request = require('request');
const fs = require('fs/promises');
const url = 'http://example.edu'
request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
 // console.log('statusCode:', response && response.statusCode); // Print the response statu1s code if a response was received
  console.log(body.length); // Print the HTML for the Google homepage.

  async function example(body) {
    const file = "C:\\javascript\\testFile.txt"
    try {
      const content = body;
      
      await fs.writeFile(file, content);
    } catch (err) {
      console.log(err);
    }
    console.log(`Node fetcher.js ${url} ${file}\nDownloaded and saved ${body.length}bytes to ${file}.`)
  }

  example(body)
});


