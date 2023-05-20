const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
// mongoose.connect('mongodb+srv://terryinvalid:hTFyfT1OFjT9RcRZ@cluster0.py0dmt5.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
