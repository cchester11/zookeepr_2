const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/layouts/index.html'))
})

router.get('/animals', (req, res) => {
      res.sendFile(path.join(__dirname,  '../../client/layouts/animals.html'))
})

router.get('/zookeepers',  (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/layouts/zookeepers.html'))
})

module.exports = router;