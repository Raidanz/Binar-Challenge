const express = require('express')
const rootRouter = express.Router()
const auth = require('./authentication')
const game = require('./game')

rootRouter.use(auth)
rootRouter.use(game)
rootRouter.get('/',(req, res) => {
    res.send('hello world')
})

module.exports = rootRouter