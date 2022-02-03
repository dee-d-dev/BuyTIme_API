const express = require('express')
const router = express.Router()
const loginCtrl = require('../controller/login_controller')

router.get("/login", loginCtrl)

module.exports = router