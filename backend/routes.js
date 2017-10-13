var express = require('express');
var router = express.Router();
const configDB = require('./configDB');
var userSchema = require('./models/userScheme').userSchema;
// var session = require('express-session');

let session = '';

    router.post('/', function (req, res) {

        userSchema.find(({login: req.body.login, password: req.body.password}), (err, userSchema) =>{
            if ( userSchema.length != 0 ){
                session = userSchema[0]._id ;
                return res.send({status: 'OK', User: userSchema});
            }
            // else{
                // return
            // }

        });
    });

    router.post('/signin', function (req, res) {
        const user = new userSchema({
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,

        });
        options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',};

        userSchema.findOne({login: req.body.login}, function (err, ext){
            if (ext){
                console.log('alredy exist')
            }else{
                user.save(function (err) {
                    if (!err) {
                        console.log("User created");
                        return res.send({status: 'OK', User: userSchema});

                    } else {
                        console.log(err);
                        if(err.name == 'ValidationError') {
                            res.statusCode = 400;
                            res.send({ error: 'Validation error' });
                        } else {
                            res.statusCode = 500;
                            res.send({ error: 'Server error' });
                        }
                        console.error('Internal error(%d): %s',res.statusCode,err.message);
                    }
                });
            }

        })

        console.log(user.login,user.password,user.email,user.modified.toLocaleString('en-US',options));
        console.log(req.body.login,req.body.password,req.body.email);
    });

    router.post('/mainPage', function (req, res) {
        userSchema.update(({_id: session},{
        markers: req.body.corditates
        }), (err, userSchema) =>{
            console.log(userSchema)
        });
    });

    router.post('/showMarkers', function (req, res) {
        userSchema.findOne({_id: session}, (err, ext) =>{
            console.log(ext)
                // console.log(JSON.stringify.ext);
        });

    });


module.exports = router;