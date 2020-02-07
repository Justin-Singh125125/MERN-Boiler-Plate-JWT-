const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Defining methods for the booksController
module.exports = {
	getUser: (req, res) => {
		res.json(req.user);
	},
	signup: async (req, res) => {
		const email = req.body.email.toLowerCase();

		//hash our password
		// bcrypt.hash(req.body.password, 10).then(function(data) {});
		const password = await bcrypt.hash(req.body.password, 10);

		//create the user in the database
		const user = await db.User.create({
			email: email,
			password: password
		});

		//create our cookie
		const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);

		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});

		res.json(user);
	},
	login: async (req, res) => {
		const email = req.body.email.toLowerCase();

		const user = await db.User.findOne({ email: email });

		if (!user) {
			res.json('NO USER FOUND WITH THAT EMAIL');
		}

		//check if the passwords match
		const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

		if (!isPasswordCorrect) {
			res.json('INVALID PASSWORD');
		}

		//create our cookie
		const token = jwt.sign({ _id: user._id }, process.env.APP_SECRET);

		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365
		});

		//delete the password off the user object before we send it back
		//even though it is encrypted
		delete user.password;

		res.json(user);
	},

	logout: (req, res) => {
		res.clearCookie('token');
		res.json('LOGGED OUT!');
	}
};
