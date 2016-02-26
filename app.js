/*  Orion 
    Description: A web app for getting things done with your friends
    By: Barrett Hafner
*/

// Initialize -----------------------------------------------------------------
// Require packages
var express         = require("express"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    flash           = require("connect-flash"),
    session         = require("express-session"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    app             = express();

// Configure packages ---------------------------------------------------------
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(session({
    secret: "This is a secret...easily hackable",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Add models -----------------------------------------------------------------    
var User = require("./models/User");

// Passport configuration -----------------------------------------------------
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add middleware -------------------------------------------------------------
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Add routes -----------------------------------------------------------------
app.use(require("./routes/root"));
app.use(require("./routes/auth"));
app.use(require("./routes/user"));
app.use(require("./routes/404"));

// Connect Database -----------------------------------------------------------
mongoose.connect(process.env.DATABASEURL || "mongodb://localhost/orion");

// Database seed
var seedDb  = require("./seeds");
seedDb();

// Listen ---------------------------------------------------------------------
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running at " + process.env.IP + " on port: " + process.env.PORT + ".  Better go catch it!");
});