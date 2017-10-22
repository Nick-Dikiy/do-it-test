const express = require('express');
const router = express.Router();
const configDB = require('./configDB');
const userSchema = require('./models/userScheme').userSchema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import validate from '../backend/validator'


    router.post('/login', function (req, res) {
        const userData = JSON.parse(req.body.user);

        const login = userData.login;
        const password = userData.password;

        let validData = validate(userData);

        if (validData){
            userSchema.findOne(   {login: login}   , function (err, userSchema) {
                if (userSchema){

                    bcrypt.compare(password, userSchema.password, function(err, result) {
                        if (result){
                            let token = jwt.sign({login: login, email: userSchema.email}, 'jwt token');
                            console.log(token)
                            return res.send({status: 'OK', token: token});
                        }else{
                            validData.errors.notFoundUser = 'User with such password not found';
                            validData.isValid = false;
                            res.statusCode = 401;
                            return res.type('json').json(validData)
                        }
                    })
                }else{
                    validData.errors.notFoundUser = 'User with such login  not found';
                    validData.isValid = false;
                    res.statusCode = 401;
                    return res.type('json').json(validData)
                }
            })

        }else {

        }
    });





    router.post('/signin', function (req, res) {

        const userData = JSON.parse(req.body.user);

        const salt = bcrypt.genSaltSync(10);

        const login = userData.login;
        const password = bcrypt.hashSync(userData.password, salt);
        const email = userData.email;

        let validData = validate(userData);


        if (validData.isValid){
            const user = new userSchema({
                login: login,
                password: password,
                email: email,

            });

            userSchema.findOne( { $or:[ {login: login}, {email: email}  ] } , function (empty, find){
                if (find){
                    validData.errors.userExist = 'User with such login and e-mail already exists';
                    validData.isValid = false;
                    res.statusCode = 401;
                    return res.type('json').json(validData)


                }else{
                    user.save(function (err) {
                        if (!err) {
                            console.log("User created");
                            let token = jwt.sign({login: login, email: email}, 'jwt token');

                            return res.send({status: 'OK', token: token});

                        }else {
                             res.status(500);
                             res.send({ error: 'Server error' });
                         }
                         console.error('Internal error(%d): %s',res.statusCode,err.message);

                    });
                }
            });

        }else{
            res.statusCode = 401;
            return res.type('json').json(validData)
        }





    });








    router.post('/saveMarkers', function (req, res) {
        let markers = JSON.parse(req.body.data);
        let token = req.headers.authorization;
        let decoded = jwt.verify(token, 'jwt token');

        userSchema.update(({login: decoded.login, email: decoded.email},{
        markers: markers.markers
        }), (err, userSchema) =>{
            console.log(userSchema)
        });
    });

    router.post('/showMarkers', function (req, res) {
        // let markers = JSON.parse(req.body.data);
        // let token = req.headers.authorization;
        // let decoded = jwt.verify(token, 'jwt token');

        // userSchema.findOne({_id: session}, (err, ext) =>{
        //     console.log(ext)
        //         // console.log(JSON.stringify.ext);
        // });

    });


module.exports = router;