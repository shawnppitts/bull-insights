const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (request, response) => {

	const saltPassword = await bcrypt.genSalt(10);
	const securePassword = await bcrypt.hash(request.body.password, saltPassword);

	const user = new UserModel({
		fullName: request.body.fullName,
		username: request.body.username,
		email: request.body.email,
		password: securePassword
	});

	user.save()
	.then(data => {
		response.json(data);
	})
	.catch(error => {
		response.json(error);
	})
});

router.post('/login', async (request, response) => {
	const {username, password} = request.body;

	try {
		let user = await UserModel.findOne({
			username
		});

		if (!user){
			return response.status(400).json({
				message: "User does not exist"
			})
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch){
			return response.status(400).json({
				message: "User does not exist"
			})
		}

	} catch(error){
		console.log(error);
	}
});

router.get("/id", async (request, response) => {
	try {
	  	const user = await UserModel.findById(request.user.id);
	  	request.json(user);
	} catch (error) {
	    response.send({ message: "Error in Fetching user" });
	}
 });

module.exports = router;