import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
	console.log(res.locals);
	console.log(req.body);
	next();
});

import authRoutes from './auth';
router.use(authRoutes);

import userRoutes from './user';
router.use(userRoutes);

// Catchall route
app.get('*', function(req, res) {
	res.sendFile('./index.html');
});

export default router;
