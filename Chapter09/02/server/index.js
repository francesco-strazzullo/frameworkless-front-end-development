const express = require('express')
const cors = require('cors')
const tweets = require('./tweets')
const app = express()
const bodyParser = require('body-parser')

const parser = bodyParser.json()

app.use(cors())

app.get('/api/tweet', (req, res) => {
  const list = tweets.list()
  res.send(list)
})

app.post('/api/tweet', parser, (req, res) => {
  const result = tweets.add(req.body.tweet)
  res.send(result)
})

module.exports = app
