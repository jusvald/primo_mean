// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {"results": ["Important 1 ","Thing 2"]};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });
    
    const port = process.env.PORT || '3000';
    app.set('port', port);

    app.listen(port, () => {console.log('Example app listening on port 3000!');});