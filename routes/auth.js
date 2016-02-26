var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/User");


router.get("/register", function(req, res) {
   res.render("register") ;
});

router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            console.log(err);
            res.redirect("/register");
        } else {
            user.starScore = 0;
            user.list.push({title: "Make a List!", starValue: 1});
            user.save();
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to YelpCamp " + user.username + "!");
                res.redirect("/user/" + user._id );
            });
        }
    });
});

// show login in form
router.get("/login", function(req, res) {
    res.render("login");
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
        req.flash("error", info.message);
        return next(err);
    }
    if (!user) { 
        req.flash("error", info.message);
        return res.redirect('/login');
    } else {
        req.logIn(user, function(err) {
            if (err) { 
                req.flash("error", info.message);
                return next(err); 
            } else {
                req.flash("success", "Welcome back " + user.username + "! Let's get get something done!");
                return res.redirect('/user/' + user._id);
            }
        });
    }
  })(req, res, next);
});

// logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You are logged out!");
    res.redirect("/");
});

module.exports = router;