/**
 * Created by ammar on 1/24/2017.
 */
var express = require('express')
const path = require('path');
var bodyParser = require('body-parser')
var app = express()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
// app.use(express.json());

app.use(express.static('./build'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

console.log("log working")

app.post('/test-page', function(req, res) {
    console.log("here")
    console.log(req)
});

app.listen(9000);