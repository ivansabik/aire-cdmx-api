// html2json.njs
// Define el flujo para parsear HTMLs, usa wscraper para NodeJS (npm wscraper)

var util = require('util');
var	fs = require('fs');
var	wscraper = require('wscraper');

var html = fs.readFileSync('./html/MAXIMOS_co_2005.html');
var script = fs.readFileSync('./aire-df.njs');
var wscraper = wscraper.createScraper();

wscraper.on('done', function(result) {
    util.debug(util.inspect(result));
});

wscraper.on('abort', function(e) {
	util.log('Getting error in parsing: ' + e)
});

wscraper.run(html, script);
