const express = require('express')
const req=require(".script2.js")
const app = express()
console.log(req);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

