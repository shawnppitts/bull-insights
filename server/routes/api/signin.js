const express = require('express');
const router = express.Router();
const UserModel = require('../../models/User');
const UserSessionModel = require('../../models/UserSession');


router.post('/login', async (request, response) => {
	const { body } = request;
	const { username, password} = body;

	// Save the use
	UserModel.find({
		username:username
	}, (error, users) => {
		console.log(error);
		if (error){
			return response.send({
				success: false,
				message: "Error: Server Error"
			})
		}
		if (users.length != 1){
			return response.send({
				success: false,
				message: "Could not locate user"
			})
		}

		const user = users[0];

		if (!user.validPassword(password)){
			return response.send({
				success: false,
				message: "Could not locate user"
			})			
		}

		const userSession = new UserSessionModel();

		userSession.userId = user._id;
		userSession.save((error, doc) => {
			console.log(error);
			if (error){
				return response.send({
					success: false,
					message: "Error: Server Error"
				})
			}
			return response.send({
				success: true,
				message: "Valid Signin",
				token: doc._id
			});						
		});
	});
});