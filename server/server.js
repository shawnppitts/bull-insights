const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/api/routes');
const cors = require('cors');
const app = express();

const port = 4000;

dotenv.config();

mongoose.connect(process.env.MONGODB_ACCESS, () => {
	console.log("MongoDB Connected!\n");
});

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
	console.log(`server running on ${port}`)
});