const express = require ('express')
const router = express.Router()
const game = require('../controllers/game')
router.get('/game', game.gameView)

module.exports = router