//NODE JS TUTORIAL https://www.w3schools.com/nodejs/nodejs_get_started.asp
//Go to the file location. Then do "node node1.js"

//Purpose of this script
//To return list of array

var http = require('http');
var timeIsNow = require('./Node/Getcurrentdate');
var url = require('url');
var fs = require('fs');

http.createServer( (req, res) => {

    // HELLO WORLD
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello World!');

    // Delay execution of ajax response
    setTimeout(
        function () {
            res.writeHead(200, {'Content-Type': 'application/json'});
            // res.end('HELLO. This message delayed for 5 seconds');

            //method 1
            var response = {
                status  : 200,
                success : 'Updated Successfully'
            }
            res.end(JSON.stringify(response));

            //method 2
            // res.json({success : "Updated Successfully", status : 200}); //not working

            res.end();
        }, 2000);

    // Include Your Own Module
    // https://www.w3schools.com/nodejs/nodejs_modules.asp
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("The date and time are currently: " + timeIsNow.myDateTime());
    // res.end();

    // Accepting input + Read the Query String
    // https://www.w3schools.com/nodejs/nodejs_http.asp
    // Try type into URL "http://localhost:8080/helloworld"
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("Your current URL is : " + req.url + "<br/>"); //Javascript
    // res.write(`Your current URL is : ${req.url} <br/>`); //ES6
    // res.end();

    // Accepting input V2 + Split the Query String
    // https://www.w3schools.com/nodejs/nodejs_http.asp
    // Try type into URL "http://localhost:8080/helloworld"
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(`Your current URL is : ${req.url} <br/>`);
    // var q = url.parse(req.url, true).query;
    // res.write(`Year : ${q.year}, Month: ${q.month} <br/>`);
    // var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    // q = url.parse(adr, true);
    // res.write(`host is : ${q.host} <br/>`);
    // res.write(`pathname is : ${q.pathname} <br/>`);
    // res.write(`search is : ${q.search} <br/>`);
    // res.end("END IS HERE");
      
    // Node.js File System Module
    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    // fs.readFile('./Node/demofile1.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end("<p>END IS HERE</p>");
    // });

    // Please study below, seems intersting
    // https://stackoverflow.com/questions/42075746/typeerror-res-json-is-not-a-function

}).listen(8080);
