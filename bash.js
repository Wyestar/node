// console.log(process.argv);

var commands = require('./commands.js');
var fs = require('fs');
var request = require('request');

var done = function(output) {
  // show output
  process.stdout.write(output);
  // show prompt
  process.stdout.write('prompt > ' + '\n');
}

process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  commands[cmd](data, done);
})

module.exports = {
  done: done,
}
