const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new Schema({

    fullname: { type: String, required: true},
    phone: {type: String, required: true},
    username: {type: String, required: true},
    email: { type: String, unique: true, required:'Email is required.', 
             lowercase:true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    password: {type: String, required: "Password is required",
                        min: [4, 'Password too short'], max:[16, 'Password too long']},
    bookings: [{type: Schema.Types.ObjectId, ref: 'Booking'}]
   
    
});

userSchema.methods.isSamePassword = function(requestedPassword){
    return bcrypt.compareSync(requestedPassword, this.password);
}

userSchema.pre('save',function(next){
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema);