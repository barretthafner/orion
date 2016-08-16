var express     = require("express"),
    jsonParser  = require("body-parser").json(),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/User");



router.post("/api/register", jsonParser, function(req, res) {
  res.status(200).json(req.body);
//  if (req.body.credentials) {
//    const credentials = req.body.credentials;
//    const newUser = new User({username: credentials.username});
//    User.register(newUser, credentials.password, function(err, user){
//      if(err){
//        req.flash("error", err.message);
//        res.status(500).json(err);
//      } else {
//        user.starScore = 0;
//        user.list.push({title: "Make a List!", starValue: 1});
//        user.save();
//        passport.authenticate("local")(req, res, function(){
//        console.log("bamm!");
//          req.flash("success", "Welcome to Orion " + user.username + "!");
//          res.status(201).json(user.username);
//        });
//      }
//    });
//  }
//  res.status(400);
});

// login route
router.post('/api/login', jsonParser, function(req, res, next) {
  res.status(200).json(req.body);
//  passport.authenticate('local', function(err, user, info) {
//    if (err) {
//        req.flash("error", info.message);
//        return next(err);
//    }
//    if (!user) {
//        req.flash("error", info.message);
//        return res.redirect('/login');
//    } else {
//        req.logIn(user, function(err) {
//            if (err) {
//                req.flash("error", info.message);
//                return next(err);
//            } else {
//                req.flash("success", "Welcome back " + user.username + "! Let's get get something done!");
//                return res.redirect('/user/' + user._id);
//            }
//        });
//    }
//  })(req, res, next);
});

// logout route
//router.get("/logout", function(req, res) {
//    req.logout();
//    req.flash("success", "You are logged out!");
//    res.redirect("/");
//});

module.exports = router;
