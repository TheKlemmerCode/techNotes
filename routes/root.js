const express = require('express')
const router = express.Router()
const path = require('path')

// regex ^ = beginning of string only $ = at the end of string only
// will only match if requested route is only /
// | = or
// could be /index or index.html
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router