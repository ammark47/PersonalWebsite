/**
 * Created by ammar on 1/24/2017.
 */
var express = require('express')
const path = require('path');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
const sendmail = require('sendmail')();

var app = express()

var port = process.env.PORT || 8080;

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

app.post('/', function(req, res) {
    const email = process.env.email
    const password = process.env.password
    const transport = "smtps://" + email + "%40gmail.com:" + password +"@smtp.gmail.com"
    var transporter = nodemailer.createTransport(transport);

    const form = req.body.formData
    const sender = form["First name"] + form["Last name"] + "<" + form["Email"] + ">"

    transporter.sendMail({  //email options
        from: 'no-reply@gmail.com',
        to: "Ammar Karim <ammarkarim1994@gmail.com>", // receiver
        subject: form["Subject"] + " " + form["Email"], // subject
        html: form["Message"]// body
    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + res.message);
        }

        // smtpTransport.close();
    });

});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});