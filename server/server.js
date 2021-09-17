const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();

const port = 4000;

dotenv.config();

mongoose.connect(process.env.MONGODB_ACCESS, () => {
	console.log("MongoDB Connected!");
});

app.use(express.json());
app.use(cors());
app.use('/v1', routes);

app.listen(port, () => {
	console.log(`server running on ${port}`)
});