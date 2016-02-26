var express     = require("express"),
    router      = express.Router(),
    User        = require("../models/User"),
    middleware  = require("../middleware");
    

//INDEX
router.get("/user", middleware.isLoggedIn, function(req, res) {
    // Get all campgrounds from DB
    User.find({}, function(err, users){
        if (err) {
            console.log(err);
            req.flash("error", "Something went horribly wrong!");
            res.redirect("/");
        } else {
            res.render("user/index", {users: users});
        }
    });
});


//SHOW
router.get("/user/:id", middleware.isLoggedIn, function(req, res){
    // find the campground with provided ID
    User.findById(req.params.id).populate("friends").exec(function(err, user){
        if(err){
            console.log(err);
            req.flash("error", "User not found!");
            res.redirect("back");
        } else if (user) {
            res.render("user/show", {user: user});
        } else {
            req.flash("error", "User not found!");
            res.redirect("back");
        }
    });
});

//DELETE
router.delete("/user/:id", middleware.checkOwnership, function(req, res){
    User.findById(req.params.id, function(err, user){
        if (err){
            req.flash("error", "Couldn't find the user!");
            res.redirect("/user");
        } else {
            var name = user.username;
            user.remove(function(err){
                if (err) {
                    req.flash("error", "Error! User '" + name + "' was not deleted!");
                    res.redirect("/user");
                } else {
                    req.logout();
                    req.flash("success", "User '" + name + "' was deleted!");
                    res.redirect("/");
                }
            });
        }
    });
});

module.exports = router;