const Booking = require('./models/booking');

exports.createBooking = function(req, res){
    const { name, address, startDate, endDate, email, phone } = req.body;
    const booking = new Booking({name, address, startDate, endDate, email, phone });
    booking.save(function(err){
        if(err){
            console.log(err);
            return
        }
        res.json({
            'created': 'success'
        }) 
    });   
    
}