const Order = require('../models/orderModel')

const getTrips = async (req, res) => {
    const orders = await Order.find()
    res.status(200).json(orders)
}

const postTrips = async (req, res) => {
    console.log(req.body.order);
    const orderJSON = JSON.stringify(req.body.order);

    const order = await Order({
        order: orderJSON
    })
    const savedOrder = await order.save()

    res.send(req.body.order)
}



const putTrips = (req, res) => {
    res.send(`idi nahui put ${req.params.id}`)
}



const deleteTrips = (req, res) => {
    res.send(`idi nahui delete ${req.params.id}`)
}

module.exports = {
    getTrips,
    postTrips,
    putTrips,
    deleteTrips,
}
