const express = require('express');
const router = express.Router();
const BookingCtrl = require('../booking');

router.post('', BookingCtrl.createBooking);

module.exports = router;