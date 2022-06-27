const Order = require('../models/orderModel')


const postTrips = async (req, res) => {
    const order = await Order.find({ _id: req.body.id })
    res.send(order)
}


module.exports = {
    postTrips,
}
