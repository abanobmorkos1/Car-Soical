const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup.ejs');
})

router.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
        await User.create(req.body);
        res.render('login.ejs');
    } catch{
        res.send('user not created');
    }
});

router.get('/login' , (req, res) => {
    res.render('login.ejs');
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
        res.send('user doesnt exist')
    } else {
        const password = bcrypt.compareSync(req.body.password, user.password)
        if (password) {
            console.log(user);
            req.session.user = req.body.username;
            req.session.loggedIn = true;
            res.redirect('/route');

        } else {
            res.send('wrong password')
        }
    }
});


module.exports = router;