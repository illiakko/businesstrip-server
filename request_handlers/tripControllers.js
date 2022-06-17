const getTrips = (req, res) => {
    res.send('idi nahui get')
}
const postTrips = (req, res) => {
    res.send('idi nahui post')
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
