const mongoose = require('mongoose');

var Schema = mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true,unique: true },
    markers: {type: Array, default: []},
    modified: { type: Date, default: Date.now }
});

var userSchema = mongoose.model('User', Schema);

module.exports = userSchema;