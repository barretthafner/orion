var express     = require("express"),
    jsonParser  = require("body-parser").json(),
    router      = express.Router(),
    passport    = require("passport"),
    middleware  = require("../middleware"),
    User        = require("../models/User");

function composeUserData(user) {

  return {
    username: user.username,
    id: user._id,
//    email: user.email || null,
//    starScore: user.starScore,
//    list: user.list,
//    friendships: []
  }
}

// index route
router.get("/api/user", (req, res) => {
    User.find({}, (err, users) => {
      if(err){
        res.status(500).json(err);
      } else {
        const sanitizedUsers = users.map((user) => {
          return composeUserData(user);
        });
        res.status(200).json(sanitizedUsers);
      }
    });
});

//show


// destroy route
router.delete("/api/user/:id", (req, res) => {
  console.log(req.params);
  User.findById(req.params.id, (err, user) => {
    if (err){
      res.status(404).json(err);
    } else {
//      var const = {username: user.username};
      user.remove((err) => {
        if (err) {
          res.status(500).json(err);
        } else {
          req.logout();
          res.sendStatus(200);
        }
      });
    }
  });
});


module.exports = router;
