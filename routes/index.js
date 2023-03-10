const router = require('express').Router()
const frontend = require('./frontend')

router.use('/', frontend)

module.exports = router;