const router = require('express').Router()
const frontend = require('./frontend')
const backend = require('./backend')

router.use('/', frontend)
router.use('/api', backend)

module.exports = router;