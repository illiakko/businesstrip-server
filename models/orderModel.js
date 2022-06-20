const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        order: String
    }

)

module.exports = mongoose.model('Order', orderSchema)