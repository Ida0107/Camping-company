const Booking = require('./models/booking');

class FakeDb{
    constructor(){
        this.bookings = [{
            name: "Rohit",
            address: "kalachowki",
            startDate: "22-09-2018",
            endDate: "28-09-2017",
            email: "rohit.born2code@gmail.com",
            phone: "7506853683",

        },
        {
            name: "Somalee",
            address: "kalachowki",
            startDate: "22-10-2018",
            endDate: "28-10-2018",
            email: "somalee.gupta@gmail.com",
            phone: "7506853683",
        }
    ]
    }
async cleanDb(){
    await Booking.remove({})
}

pushBookingsToDb(){
    this.bookings.forEach((booking)=>{
        const newBooking = new Booking(booking);
        newBooking.save();
    })
}

seedDb(){
    this.cleanDb();
    this.pushBookingsToDb();
}
}

module.exports = FakeDb;