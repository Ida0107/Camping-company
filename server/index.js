const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Booking = require('./models/booking');
const FakeDb = require('./fakedb');

mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(()=>{
    const fakeDb = new FakeDb;
    fakeDb.seedDb();
});

const app = express();

app.get('', function(req,res){
    res.json({'success': true});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running!');
})