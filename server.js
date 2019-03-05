'use strict';

const express = require('express');
const app = express();

// Static css/js files
app.use('/', express.static('./build'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/build/index.html');
});

const port = 3001;

// Start server
app.listen(port, function() {
	console.log('Listening on ' + port);
});
