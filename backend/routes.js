const express = require('express');
const router = express.Router();
const configDB = require('./configDB');
const User = require('./models/userScheme');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import validate from '../backend/validator'


    router.post('/login', function (req, res) {
        const { user } = req.body;

        const login = user.login;
        const password = user.password;

        let validData = validate(user);

        if (!validData) return res.status(401).json(validData)

        User.findOne( {login: login} )
        .then(foundUser =>{

            bcrypt.compare(password, foundUser.password)
            .then((check) => {
                if (check){
                    let token = jwt.sign({login: login, email: foundUser.email}, 'jwt token');
                    return res.send({status: 'OK', token: token});
                }else{
                    validData.errors.notFoundUser = 'User with such password not found';
                    validData.isValid = false;
                    return res.status(401).json(validData)
                }
            })
        })
        .catch(() => {
            validData.errors.notFoundUser = 'User with such login  not found';
            validData.isValid = false;
            return res.status(401).json(validData)
        })
    });

    router.post('/signin', function (req, res) {
        const { user } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(user.password, salt);

        let validData = validate(user);
        if (!validData.isValid) return res.status(401).json(validData)

        const newUser = new User({
            login: user.login,
            password: password,
            email: user.email,

        });

        newUser.save()
        .then(() => {
            console.log("User created");
            const token = jwt.sign({login: user.login, email: user.email}, 'jwt token');
            return res.send({status: 'OK', token: token});
        })
        .catch(err => {
            if (err.code === 11000) {
                validData.errors.userExist = 'User with such login and e-mail already exists';
                validData.isValid = false;
                return res.status(401).json(validData)
            }

            res.status(500).json({ message: 'Some server error' })
        })
    });

    router.post('/saveMarkers', function (req, res) {
        const {markers} = req.body
        console.log(markers)
        let token = req.headers.authorization;
        let decoded = jwt.verify(token, 'jwt token');

        User.update(({login: decoded.login, email: decoded.email},{
        markers: markers
        }), (err, User) =>{
            console.log(User)
        });
    });

    router.get('/showMarkers', function (req, res) {
        let token = req.headers.authorization;
        let decoded = jwt.verify(token, 'jwt token');

        User.findOne( {login: decoded.login, email: decoded.email} )
            .then( foundMarkers =>{
                console.log(foundMarkers)
                return res.send({status: 'OK', markers: foundMarkers.markers});
            })
            .catch(() => {

            })

    });

    router.post('/Builds', function (req,res) {
        const  { item }  = req.body;
        let type = req.body.data;
// console.log(type)
        geoInfoScheme.find( {type: type} )
            .then( foundBuilds =>{
                console.log(foundBuilds)
                return res.send({status: 'OK', items: foundBuilds});
            })
            .catch(() => {

            })

    });

module.exports = router;