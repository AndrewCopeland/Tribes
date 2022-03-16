// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	twitterAuth: {
		consumerKey: process.env.AUTH_TWITTER_CONSUMERKEY,
		consumerSecret: process.env.AUTH_TWITTER_CONSUMERSECRET,
		callbackURL: process.env.DOMAIN + '/auth/twitter/callback',
		passReqToCallback: true
	},

	githubAuth: {
		clientID: process.env.AUTH_GITHUB_CLIENTID,
		clientSecret: process.env.AUTH_GITHUB_CLIENTSECRET,
		callbackURL: process.env.DOMAIN + '/auth/github/callback',
		passReqToCallback: true
	},

	redditAuth: {
		clientID: process.env.AUTH_REDDIT_CLIENTID,
		clientSecret: process.env.AUTH_REDDIT_CLIENTSECRET,
		callbackURL: process.env.DOMAIN + '/auth/reddit/callback',
		passReqToCallback: true
	},

	discordAuth: {
		clientID: process.env.AUTH_DISCORD_CLIENTID,
		clientSecret: process.env.AUTH_DISCORD_CLIENTSECRET,
		callbackURL: process.env.DOMAIN + '/auth/discord/callback',
		scope: 'identify email',
		passReqToCallback: true
	}

};
