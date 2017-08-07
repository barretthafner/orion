import User from '../models/User';

export default function(req, res, next) {
	if (!req.isAuthenticated())
		res.sendStatus(401);
	else {
		User.findById(req.params.id, (err, user) => {
			if (err)
				res.sendStatus(500);
			else if (!user._id.equals(req.user._id))
				res.sendStatus(401);
			else
				next();
		});
	}
}
