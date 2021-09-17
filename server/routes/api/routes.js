const express = require('express');
const router = express.Router();
const UserModel = require('../../models/User');

router.post('/register', async (request, response) => {
	const { body } = request;
	const {fullName, username, email, password} = body;

	// Verify email does not exist in db
	UserModel.find({
		email: email
	}, (error, previousUsers) => {
		if (error){
			return response.end('Error: Server Error')
		} else if (previousUsers.length > 0){
			return response.end('Error: User Already Exists')
		}
	});

	// Create new user
	const user = new UserModel({
		fullName: fullName,
		username: username,
		email: email,
		password: password
	});

	// Save the user
	user.save((error, user) => {
		if (error) {
			return response.end({
				success: false,
				message: "Error: Server Error"
			})
		}
		return response.end({
			success: true,
			message: "User Registered!"
		})
	})

});

module.exports = router;