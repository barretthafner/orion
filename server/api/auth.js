import express from 'express';
import passport from 'passport';
import { isLoggedIn } from '../middleware';
import User from '../models/User';

const router = express.Router();

function composeUserData(user, friends) {
	return {
		username: user.username,
		id: user._id,
		starScore: user.starScore,
		list: user.list,
		friendships: friends || []
	}
}

router.post('/api/register', (req, res) => {
	if (req.body.credentials) {
		const credentials = req.body.credentials;
		const newUser = new User({username: credentials.username});

		User.register(newUser, credentials.password, (err, user) => {
			if (err)
				res.status(500).json(err);
			else {
				user.starScore = 0;
				user.list.push({ title: 'Make a List!', starValue: 1 });
				user.save();
				user.authenticate(credentials.password, () => {
					res.status(201).json(composeUserData(user));
				});
			}
		});
	}
	res.status(400);
});

// login route
router.post('/api/login', passport.authenticate('local'), (req, res) => {
	User.getFriends(req.user, (err, friends) => {
		if (err)
			return res.status(500);
		else
			return res.status(200).json(composeUserData(req.user, friends));
	});
});

// logout route
router.get('/api/logout', isLoggedIn, (req, res) => {
	req.logout();
	res.sendStatus(200);
});

export default router;
