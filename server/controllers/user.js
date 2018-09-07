const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {normalizeErrors} = require('../helpers/mongoose');
const config = require('../config/dev')


exports.auth = function(req,res){
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).send({errors: [{title:'Datamissing!', detail:'Provide all inputs'}]});
    }
    User.findOne({email}, function(err,user){
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
        if(!user){
            return res.status(422).send({errors: [{title:'Invalid User', detail:'User does not exist'}]});
        }

       if( user.isSamePassword(password)){
        const token = jwt.sign({
            userId: user.id  , 
            username : user.username
          }, config.SECRET, { expiresIn: '1h' });

        return res.json(token);
       }
        else{
            return res.status(422).send({errors: [{title:'Invalid Password', detail:'Please enter correct password'}]});
       }
        
    });
}

exports.register= function(req,res){

    const {fullname, phone, email, username, password, confirmpassword} = req.body;

    if(!fullname || !phone || !email || !username || !password || !confirmpassword){
        return res.status(422).send({errors: [{title:'Datamissing!', detail:'Provide all inputs'}]});
    }

    if(password!== confirmpassword){
        return res.status(422).send({errors: [{title:'Invalid Password', detail:'Password mismatch'}]});
    }

    User.findOne({email:email}, function(err, existingUser){
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }

        if(existingUser){
            return res.status(422).send({errors: [{title:'Invalid User', detail:'User already exists'}]});
        }

        const user = new User({
            fullname,
            phone,
            username: username,
            email,
            password

        });
        user.save(function(err){
            if(err){
                return res.status(422).send({errors: normalizeErrors(err.errors)});
            }
            return res.json({"registered": true});
        })
    }); //or just ({email})if key and property nme is same
   
}

exports.authMiddleware = function(req,res,next){
    const token = req.headers.authorization;
    if(token){
        const user = parseToken(token);
        User.findById(user.userId, function(err,user){
            if(err){
                return res.status(422).send({errors: normalizeErrors(err.errors)});
            }
            if(user){
                res.locals.user = user; //pass object to next handler
                next();
            }
            else{
                return res.status(422).send({errors: [{title:'Invalid User', detail:'User is not authorized'}]});

            }

        })
    }
    else{
        return res.status(422).send({errors: [{title:'Invalid User', detail:'User is not authorized'}]});
    }
}

function parseToken(token){
    token = token.split(' ')[1];
    return jwt.verify( token, config.SECRET);

}