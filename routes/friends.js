var express     = require("express"),
    router      = express.Router(),
    User        = require("../models/User"),
    middleware  = require("../middleware");
    
    
// INDEX
router.get("/user/:id/friends", middleware.isLoggedIn, function(req, res){
    User.findById(req.params.id, function(err, user){
        if (err) {
            console.log(err);
            req.flash("error", "An error occured");
            res.redirect("back");
        } else if (!user) {
            req.flash("error", "Couldn't find that user!");
            res.redirect("back");
        } else {
            User.getFriends(user, function(err, friends){
                if (err) {
                    console.log(err);
                    req.flash("error", "An error occured");
                    res.redirect("back");
                } else {
                    res.render("friends/index", {friends: friends});   
                }
            });
        }
    });
});

//ADD
router.post("/user/:id/friends/:friend_id", middleware.checkOwnership, function(req, res){
    //check if friends
    //if not send request
    //redirect back to user show page
    
    
    
    // User.find({
    //     '_id': { $in: [
    //         req.params.id,
    //         req.params.friend_id 
    //     ]}
    // }, function(err, friends){
    //     if(err){
    //         console.log(err);
    //         req.flash("error", "An error occured");
    //         res.redirect("back");
    //     } else {
    //         console.log(friends);
    //     }
    // });
    
    User.requestFriend(req.params.id, req.params.friend_id, function(err) {
        if (err) {
            console.log(err);
            req.flash("error", "An error occured");
            res.redirect("back");
        } else {
            req.flash("success", "New friend added!");
            res.redirect("/user/" + req.params.id);
        }
    });
    
    
    // User.findById(req.params.id, function(err, user){
    //     if (err) {
    //         console.log(err);
    //         req.flash("error", "An error occured");
    //         res.redirect("back");
    //     } else if (!user) {
    //         req.flash("error", "Couldn't find that user!");
    //         res.redirect("back");
    //     } else {
    //         User.getFriends(user, function(err, friends){
    //             if (err) {
    //                 console.log(err);
    //                 req.flash("error", "An error occured");
    //                 res.redirect("back");
    //             } else {
    //                 res.render("friends/index", {friends: friends});   
    //             }
    //         });
    //     }
    // });
    
});

module.exports = router;