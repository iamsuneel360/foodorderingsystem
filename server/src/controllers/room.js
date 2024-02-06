const Room = require("../models/room")

const getallrooms = async (req, res) => {
    try {
        const rooms = await Room.find({})
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

module.exports = { getallrooms }