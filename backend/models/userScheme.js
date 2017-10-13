const mongoose = require('mongoose');
// var Schema = mongoose.Schema({
//     login:  String,
//     password: String,
//     email: String,
//     modified: Date
// });
// var User = mongoose.model('User', Schema);
// var userModel = new User({
//     login:  String,
//     password: String,
//     email: String,
//     modified:  Date.now
// });
var Schema = mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    markers: {type: String, default: ''},
    modified: { type: Date, default: Date.now }
});

var userSchema = mongoose.model('User', Schema);

module.exports.userSchema = userSchema;