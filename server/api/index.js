import express from 'express';

const router = express.Router();

router.use(function(req, res, next) {
	console.log(res.locals);
	console.log(req.body);
	next();
});

router.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

import authRoutes from './auth';
router.use(authRoutes);

import userRoutes from './user';
router.use(userRoutes);

// Catchall route
router.get('*', function(req, res) {
	res.redirect('/');
});

export default router;
