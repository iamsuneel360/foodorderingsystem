const Booking = require("../models/booking.js");
const Room = require("../models/room.js");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51NvihqSAIZdDIMkwTFtTJdDKpWLeJa91jmRauez0Pzq1kNss1ugTP3c1dHfmnjdn4KKF7TQmOtlEL4ynhhTz3Zsf008djlsN06"
);

const getallbooking = async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays, token } =
    req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: totalamount * 100,
        customer: customer.id,
        currency: "npr",
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );
    if (payment) {
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
    }
    res.send("Payment successfull, your room is booked");
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getallbooking };
