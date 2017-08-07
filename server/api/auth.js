'use strict';

var express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    middleware  = require('../middleware'),
    User        = require('../models/User');

function composeUserData(user, friends) {
  return {
    username: user.username,
    id: user._id,
    starScore: user.starScore,
    list: user.list,
    friendships: friends || []
  }
}


router.post('/api/register', function(req, res) {
  if (req.body.credentials) {
    const credentials = req.body.credentials;
    const newUser = new User({username: credentials.username});
    console.log(newUser);
    User.register(newUser, credentials.password, function(err, user){
      if(err){
        res.status(500).json(err);
      } else {
        user.starScore = 0;
        user.list.push({title: 'Make a List!', starValue: 1});
        user.save();
        user.authenticate(credentials.password, function(){
          console.log('Added User: ' + user.username);
          res.status(201).json(composeUserData(user));
        });
      }
    });
  }
  res.status(400);
});

// login route
router.post('/api/login', passport.authenticate('local'), function(req, res) {
  User.getFriends(req.user, function(err, friends){
    if (err) {
      return res.status(500);
    } else {
      return res.status(200).json(composeUserData(req.user, friends));
    }
  });



//  passport.authenticate('local', function(err, user, info) {
//    if (err) {
//        return next(err);
//    }
//    if (!user) {
//        return res.status(500);
//    } else {
//      req.logIn(user, function(err) {
//          if (err) {
//              return next(err);
//          } else {
//            User.getFriends(user, function(err, friends){
//              if (err) {
//                return res.status(500);
//              } else {
//                return res.status(200).json(composeUserData(user, friends));
//              }
//            });
//          }
//      });
//    }
//  })(req, res, next);


});

// logout route
router.get('/api/logout', middleware.isLoggedIn, function(req, res) {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
