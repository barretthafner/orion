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
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username + "!");
            res.redirect("/");
        });
    });
});

//show login in form
router.get("/login", function(req, res) {
    res.render("login");
});

// handles login logic
router.post("/login", passport.authenticate("local",
     {  successRedirect: "/",
        successFlash: "Welcome!",
        failureRedirect: "/login",
        failureFlash: true
     }), function(req, res) {
});

// logout route
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You are logged out!");
    res.redirect("/");
});

module.exports = router;