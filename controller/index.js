const router = require('express').Router()

router.use('/api', require('./employee.js'))
router.use('/api', require('./patient.js'))

module.exports = router