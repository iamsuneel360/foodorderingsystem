const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    room: {
      type: String,
      require: true,
    },
    roomid: {
      type: String,
      require: true,
    },
    userid: {
      type: String,
      require: true,
    },
    fromdate: {
      type: String,
      require: true,
    },
    todate: {
      type: String,
      require: true,
    },
    totalamount: {
      type: Number,
      require: true,
    },
    totaldays: {
      type: Number,
      require: true,
    },
    transactionId: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "booked",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
