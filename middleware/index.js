var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        req.flash("error", "Please Login!");
        res.redirect("/login");
    } else {
        return next();
    }
};

module.exports = middlewareObj;