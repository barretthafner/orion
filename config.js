export default {

	// Get server configurations
	env: process.env.NODE_ENV || 'development',
	ip: process.env.IP || process.env.NODE_ENV ===  'development' ? 'localhost' : undefined,
	port: process.env.PORT || 8080,
	protocol: process.env.HTTPS || false,

	// Get environemnt configurations
	appSecret: 'This is an app secret for Orion.  SHhhhssshhhshshh! Dont tell anyone or a kitten will die a terrible death. Is that what you want? You bad, bad person!',

	dbUrl: process.env.ORIONDBURL || 'mongodb://orion--api:5EkQcYhtDaVs5DDufnSh@ds034677.mlab.com:34677/orion--api'
};
