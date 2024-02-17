const Booking = require("../models/booking.js");
const Room = require("../models/room.js");
const moment = require("moment");

const getallbooking = async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

  try {
    const newbooking = new Booking({
      room: room.name,
      roomid: room._id,
      userid,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      totalamount,
      totaldays,
      transactionId: "1234",
    });
    const booking = await newbooking.save();

    const roomtemp = await Room.findOne({ _id: room._id });

    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format("DD-MM-YYYY"),
      todate: moment(todate).format("DD-MM-YYYY"),
      userid: userid,
      status: booking.status,
    });

    await roomtemp.save();

    res.send("Room booked successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getallbooking };
