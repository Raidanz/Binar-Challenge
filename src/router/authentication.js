const express = require ('express')
const router = express.Router()
const auth = require('../controllers/authentication')
router.get('/login', auth.login)

module.exports = router