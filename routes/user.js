var express     = require("express"),
    router      = express.Router(),
    User        = require("../models/User"),
    middleware  = require("../middleware");
    

//INDEX
router.get("/user", function(req, res) {
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
router.get("/user/:id",middleware.checkOwnership, function(req, res){
    // find the campground with provided ID
    User.findById(req.params.id).populate("friends").exec(function(err, user){
        if(err){
            console.log(err);
            req.flash("error", "User not found!");
            res.redirect("/");
        } else {
            res.render("user/show", {user: user});
        }
    });
});

module.exports = router;