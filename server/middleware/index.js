var User = require("../models/User");

var middlewareObj = {};

middlewareObj.checkOwnership = function(req, res, next){
    if(!req.isAuthenticated()){
        res.redirect("/login");
    } else {
        User.findById(req.params.id, function(err, user){
            if(err){
                res.redirect("back");
            } else {
                if(!user._id.equals(req.user._id)){
                    res.redirect("back");
                } else {
                    next();
                }
            }
        });
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        req.flash("error", "Please Login!");
        res.redirect("/login");
    } else {
        return next();
    }
};

module.exports = middlewareObj;
