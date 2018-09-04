const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingschema = new Schema({

    name: { type: String, required: true},
    address: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: { type: String, required: true },
    email: {type: String, required: true},
    phone: {type: String, required: true},
    
});

module.exports = mongoose.model('Booking', bookingschema);