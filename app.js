const express = require('express')

const path = require('path')

const app = express()


app.use(express.static(path.resolve('dist')));


app.listen("8080", function() {
  console.log('8080')
})
