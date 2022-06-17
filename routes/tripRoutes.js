const express = require('express')
const router = express.Router()
const {
    getTrips,
    postTrips,
    putTrips,
    deleteTrips,
} = require('../request_handlers/tripControllers')




router.get('/', getTrips)
router.post('/', postTrips)
router.put('/:id', putTrips)
router.delete('/:id', deleteTrips)

module.exports = router