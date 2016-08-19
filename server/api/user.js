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
router.get("/api/user", [jsonParser, middleware.isLoggedIn], (req, res) => {
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


// destroy route
router.delete("/api/user/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err){
      res.status(404).json(err);
    } else {
      User.getFriends(user, (err, friends) => {
        if (err) {
          res.status(500).json(err);
        } else {
          let i = 0;
          friends.forEach((friend)=> {
            User.removeFriend(user, friend, (err) => {
              i++;
              if (err) {
                res.status(500).json(err);
              } else {
                if (i === friends.length) {
                  user.remove((err) => {
                    if (err) {
                      res.status(500).json(err);
                    } else {
                      req.logout();
                      res.sendStatus(200);
                    }
                  });
                }
              }
            });
          });
        }
      });
    }
  });
});

// sendFriendRequest
router.put("/api/user/:id/friend/:friendId", (req, res) => {
  const user1Id = req.params.id;
  const user2Id = req.params.friendId;
  User.findById(user1Id, (err, user1) => {
    if (err) {
      res.status(404).json(err);
    } else {
      User.requestFriend(user1Id, user2Id, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          User.getFriends(user1, function(err, friendships) {
            if (err) {
              res.status(500).json(err);
            } else {
              res.status(200).json(friendships);
            }
          })
        }
      });
    }
  });
});

// unFriend
router.delete("/api/user/:id/friend/:friendId", (req, res) => {
  const user1Id = req.params.id;
  const user2Id = req.params.friendId;
    User.findById(user1Id, (err, user1) => {
      if (err) {
        res.status(404).json(err);
      } else {
        User.findById(user2Id, (err, user2) => {
          if (err) {
            res.status(404).json(err);
          } else {
            User.removeFriend(user1, user2, (err) => {
              if (err) {
                res.status(500).json(err);
              } else {
                User.getFriends(user1, (err, friendships) => {
                  if (err) {
                    res.status(500).json(err);
                  } else {
                    res.status(200).json(friendships);
                  }
                });
              }
            });
          }
        });
      }
    });
});

//new list item
router.put("/api/user/:id/list", jsonParser, (req, res) => {
  User.findById()
});


module.exports = router;
