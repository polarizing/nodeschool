var fs = require('fs');

var dirName = process.argv[2]; // dir name
var extToFilter = process.argv[3]; // txt, js, html

var fileNameFilter = function (fileName) {
	// returns true if ext of fileName matches extToFilter
	var fileExtension = fileName.split('.')[1];
	return fileExtension == extToFilter ? true : false;
} 

var callback = function (err, list) {
	// do something on list of filename strings
	// filter and print to console one per line
	var filteredList = list.filter(fileNameFilter)
	for (var i = 0; i < filteredList.length; i++) {
		console.log(filteredList[i]);
	}
}
fs.readdir(dirName, callback);