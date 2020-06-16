const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js');

const app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
     return
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    return
})

// set aylien API credentias

function postAlyien(req,res,next)
{
  var AYLIENTextAPI = require('aylien_textapi');
  var textapi = new AYLIENTextAPI({
    application_id:process.env.API_ID,
    application_key:process.env.API_KEY
  });
  textapi.entities({
     'text': req.body
    //text:req.body.text
  }, function(error, response) {
    if (error === null) {
      Object.keys(response.entities).forEach(function(e) {
        console.log(e + ": " + response.entities[e].join(","));
      });
    }
    console.log(response)
    res.send(response)
  });
}


function postAlyienURL(req,res,next)
{
  var AYLIENTextAPI = require('aylien_textapi');
  var textapi = new AYLIENTextAPI({
    application_id:process.env.API_ID,
    application_key:process.env.API_KEY
  });
  textapi.sentiment({
    //url:'https://www.newscientist.com/article-topic/love/',
    'url':req.body.text,
    mode: 'tweet'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send(response)
    }
  });
}


//Post

app.post('/api',postAlyien)
app.post('/article',postAlyienURL)