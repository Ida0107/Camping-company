const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Booking = require('./models/booking');
const FakeDb = require('./fakedb');
const bodyParser = require('body-parser');

const bookingRoutes = require('./routes/routeBooking')

// mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(()=>{
//     const fakeDb = new FakeDb;
//     //fakeDb.seedDb();
// });
mongoose.connect(config.DB_URI, {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/booking', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running!');
})