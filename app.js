/*  Orion
    Description: A web app for getting things done with your friends
    By: Barrett Hafner
*/

// Initialize -----------------------------------------------------------------
// Require packages
var express         = require("express"),
    mongoose        = require("mongoose"),
//    bodyParser      = require("body-parser"),
//    methodOverride  = require("method-override"),
//    flash           = require("connect-flash"),
//    session         = require("express-session"),
//    passport        = require("passport"),
//    LocalStrategy   = require("passport-local"),
    app             = express();


// Configure Database -----------------------------------------------------------
// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.ORIONDBURL || "mongodb://localhost/orion");

// Database seed
if (process.argv.indexOf("--seed") > -1) {
  var seedDb  = require("./seeds");
  seedDb();
}

// Configure packages ---------------------------------------------------------
//app.use(methodOverride("_method"));
//app.use(flash());
//app.use(session({
//    secret: "This is a secret...easily hackable",
//    resave: false,
//    saveUninitialized: false
//}));
//app.use(passport.initialize());
//app.use(passport.session());

// Add models -----------------------------------------------------------------
//var User = require("./server/models/User");

// Passport configuration -----------------------------------------------------
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// Add middleware -------------------------------------------------------------
//app.use(function(req, res, next){
//    res.locals.currentUser = req.user;
//    res.locals.success = req.flash("success");
//    res.locals.error = req.flash("error");
//    next();
//});

// Add routes -----------------------------------------------------------------
app.use(require("./server/api/auth"));
//app.use(require("./api/user"));

// Serve React App -------------------------------------------------------------------
app.use(express.static(__dirname + "/client/dist"));

// Listen ---------------------------------------------------------------------
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running at ->    http://" + process.env.IP + ":" + process.env.PORT);
});