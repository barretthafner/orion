var express     = require("express"),
    jsonParser  = require("body-parser").json(),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/User");



router.post("/api/register", jsonParser, function(req, res) {
//  res.status(200).json(req.body);
  if (req.body.credentials) {
    const credentials = req.body.credentials;
    const newUser = new User({username: credentials.username});
    User.register(newUser, credentials.password, function(err, user){
      if(err){
        res.status(500).json(err);
      } else {
        user.starScore = 0;
        user.list.push({title: "Make a List!", starValue: 1});
        user.save();
        user.authenticate(credentials.password, function(){
          console.log("Added User: " + user.username);
          res.status(201).json(user);
        });
      }
    });
  }
  res.status(400);
});

// login route
router.post('/api/login', jsonParser, function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
        return next(err);
    }
    if (!user) {
        return res.status(500);
    } else {
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json(user);
            }
        });
    }
  })(req, res, next);
});

// logout route
router.get("/api/logout", function(req, res) {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
