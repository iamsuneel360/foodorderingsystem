const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    maxcount: {
        type: Number,
        require: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
}, { timestamps: true })

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;