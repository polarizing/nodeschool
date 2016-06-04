var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var fileToString = file.toString();

console.log(fileToString.split('\n').length - 1);