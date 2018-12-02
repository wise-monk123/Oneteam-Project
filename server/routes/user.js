const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

let User = require('../models/user');

router.post('/register', function(req, res) {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.confirmPassword;

  // req.checkBody('email', 'Email is required').notEmpty();
  // req.checkBody('email', 'Email is not valid').isEmail();
  // req.checkBody('username', 'Username is required').notEmpty();
  // req.checkBody('password', 'Password is required').notEmpty();
  // req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);
  //
  // let errors = req.validationErrors();
  //
  // if(errors){
  //   console.log('*****error', errors);
  // } else {
  //   let newUser = new User({
  //     email: email,
  //     username: username,
  //     password: password
  //   });
  // }

  let newUser = new User({
    email: email,
    username: username,
    password: password
  });

  newUser.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Item saved successfully!'
    });
  });

  // bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash(newUser.password, salt, function(err, hash) {
  //     if(err) {
  //       console.log(err);
  //     }
  //     newUser.password = hash;
  //     newUser.save(function(err) {
  //       if(err) {
  //         console.log(err);
  //         return;
  //       } else {
  //         // req.flash('success','You are now registered and can log in');
  //         res.redirect('http://localhost:8082/#/');
  //       }
  //     });
  //   });
  // });
});

module.exports = router;
