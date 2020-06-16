const dotenv = require('dotenv');
dotenv.config();

//check if input is invalid
function validate(req, res, next) {
  if(!req.body.text ) { 
      return res.status(400).json({
         message: 'Invalid input'
      })
  } 
  return next();
}

// set aylien API credentias
function postAlyien(req,res,next)
{
  var AYLIENTextAPI = require('aylien_textapi');
  var textapi = new AYLIENTextAPI({
    application_id:process.env.API_ID,
    application_key:process.env.API_KEY
  });
  textapi.entities({
     'text': req.body.text
  }, function(error, response) {
    if (error === null) {
      Object.keys(response.entities).forEach(function(e) {
        console.log(e + ": " + response.entities[e].join(","));
      });
      console.log(response)
      res.send(response)
    }
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

exports.validate = validate
exports.postAlyien = postAlyien
exports.postAlyienURL = postAlyienURL
