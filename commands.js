var fs = require('fs');
var request = require('request');
var bash = require('./bash.js');

// module.exports = {
//   commands: commands,
// }

module.exports = {
  // pwd, date, ls, curl

  pwd: function(data, done) {
    var output = process.argv[1];
    done(output);
  },

  date: function(time, done) {
    var output = new Date();
    output = output.toString();
    done(output);
  },

  ls: function(file, done) {
    var output = "";
    fs.readdir('.', function(err, file) {
      if (err) throw err;
      file.forEach(function(file) {
        output += file.toString() + '\n';
      })
      done(output);
    })
  },

  curl: function() {
      request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
    },
};
