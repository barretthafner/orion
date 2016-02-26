var express     = require("express"),
    router      = express.Router(),
    User        = require("../models/User");
    // middleware  = require("../middleware");
    
//SHOW
router.get("/user/:id", function(req, res){
    // find the campground with provided ID
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", "User not found!");
            res.redirect("/");
        } else {
            res.render("userList", {user: user});
        }
    });
});

module.exports = router;