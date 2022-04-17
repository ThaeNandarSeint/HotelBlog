const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Room',roomSchema);