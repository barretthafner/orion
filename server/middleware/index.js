'use strict';

var User = require('../models/User');

var middlewareObj = {};

middlewareObj.checkOwnership = function(req, res, next){
    if(!req.isAuthenticated()){
        req.flash('error', 'Please login!');
        res.redirect('/login');
    } else {
        User.findById(req.params.id, function(err, user){
            if(err){
                req.flash('error', 'User was not found!');
                res.redirect('back');
            } else {
                // does the user own the campground?
                if(!user._id.equals(req.user._id)){
                    req.flash('error', 'You are not authorized to do that!');
                    res.redirect('back');
                } else {
                    next();
                }
            }
        });
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
  if(!req.isAuthenticated()){
        res.sendStatus(401);
    } else {
        return next();
    }
};

module.exports = middlewareObj;
