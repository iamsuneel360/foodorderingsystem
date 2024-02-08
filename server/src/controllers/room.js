const Room = require("../models/room");

const getallrooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

const getroombyid = async (req, res) => {
  const roomid = req.body.roomid;
  try {
    const room = await Room.findOne({ _id: roomid });
    if (!room) {
      return res.status(404).json({ msg: "Room not found" });
    }
    res.send(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};


module.exports = { getallrooms, getroombyid };
