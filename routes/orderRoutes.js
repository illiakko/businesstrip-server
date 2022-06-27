const express = require('express')
const router = express.Router()


const {
    postTrips,
} = require('../request_handlers/orderControllers')


router.post('/', postTrips)


module.exports = router