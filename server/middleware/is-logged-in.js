export default function(req, res, next) {
	if (!req.isAuthenticated())
		res.sendStatus(401);
	else
		return next();
};
