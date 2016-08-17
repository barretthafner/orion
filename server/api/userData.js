var express     = require("express"),
    jsonParser  = require("body-parser").json(),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/User");

function composeUserData(user) {

  return {
    username: user.username,
    id: user._id,
    email: user.email || null,
    starScore: user.starScore,
    list: user.list,
    friendships: []
  }
}


router.get("/api/user", function(req, res) {
    User.find({}, function(err, users){
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


module.exports = router;
