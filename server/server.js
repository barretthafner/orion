/*  Orion API
		Description: A web api for getting things done with your friends
		By: Barrett Hafner
*/

// Initialize -----------------------------------------------------------------
// Require packages
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import connectMongo from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';


import config from '../config';
import seedDb from '../seeds';


import User from './models/User';
import api from './api';


// Configure Database -----------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, { useMongoClient: true });

// Database seed
if (process.argv.indexOf('--seed') > -1) seedDb();

// Initialize express
const app = express();

// Configure packages ---------------------------------------------------------
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.json());

const MongoStore = connectMongo(session);

app.use(session({
	secret: config.appSecret,
	name: 'sessionId',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		url: config.dbUrl,
		ttl: 1 * 24 * 60 * 60 // Removes sessions after 1 day.
	})
}));

app.use(passport.initialize());
app.use(passport.session());


// Passport configuration -----------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add routes -----------------------------------------------------------------
app.use(api);

// Listen ---------------------------------------------------------------------
app.listen(config.port, config.ip, () => {
		console.log('Server running at ->   ' + config.protocol + '://' + config.ip + ':' + config.port);
});
