const express = require('express');
const router = express.Router();
const UserModel = require('../../models/User');
const UserSessionModel = require('../../models/UserSession');
const bcrypt = require('bcrypt');

// Signup USER
router.post('/register', async (request, response) => {
	const { body } = request;
	const { fullName, username, email, password} = body;

	// Verify email does not exist in db
	UserModel.find({
		email: email
	}, (error, previousUsers) => {
		if (error){
			return response.end('Error: Cannot find user')
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
	
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	// Save the user
	user.save((error, user) => {
		if (error) {
			return response.send({
				success: false,
				message: "Error: Cannot register user"
			})
		}
		return response.send({
			success: true,
			message: `Welcome to Bull Insights ${email}!`
		})
	})
});

// Login USER
router.post('/login', async (request, response) => {
	const { body } = request;
	let { email, password} = body;

	// Save the use
	UserModel.find({
		email:email
	}, (error, users) => {

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
			response.send({
				success: false,
				message: 'Error: Invalid Password'
			})
		}

		const userSession = new UserSessionModel();
		userSession.userId = user._id;
		userSession.email = user.email;
		userSession.save((error, doc) => {
			if (error){
				return response.send({
					success: false,
					message: "Could not save session..."
				})
			}
			return response.send({
				success: true,
				message: `Successfully Signed in! Welcome, ${email}`,
				token: doc._id
			});						
		});
	});
});

// Verify Token
router.get('/verify', async (request, response) => {
	// Get Token
	const { query } = request;
	const { token } = query;

	// Verify Token is unique
	UserSessionModel.find({
		_id: JSON.stringify(token)
	}, (error, sessions) => {
		if (error){
			return response.send({
				success: false,
				message: 'Error: Server Error'
			});
		}

		if (sessions.length != 1){
			return response.send({
				success: false,
				message: 'Error: Invalid Session'
			});			
		} else {
			return response.send({
				success: true,
				message: 'Valid Session'
			});				
		}
	});
});

// Logout USERs
router.get('/logout', async (request, response) => {
	// Get Token
	const { query } = request;
	const { token } = query;
	// Verify Token is unique

	UserSessionModel.findOneAndUpdate({
		_id: token,
		isDeleted: false
	}, {
		$set: {
			isDeleted: true
		}
	}, null, (error, sessions) => {
		if (error){
			return response.send({
				success: false,
				message: 'Error: Server Error'
			});
		}

		return response.send({
			success: true,
			message: 'Valid Session'
		});			
	});
})

module.exports = router;