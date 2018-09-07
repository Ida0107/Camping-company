const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.get('/secret', User.authMiddleware, function(req,res){
    return res.json({'secret': true})
});

router.post('/auth',User.auth);

router.post('/register', User.register);

module.exports = router;