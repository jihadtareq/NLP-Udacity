var path = require('path')
const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js');
var requestPost = require('./index')

app.use(cors())
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

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    return
})


//Post

app.post('/api',requestPost.postAlyien)
app.post('/article',requestPost.postAlyienURL)

module.exports = app;