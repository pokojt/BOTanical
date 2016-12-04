const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const userModel = require('../models/user');

router
    // .get('/', bodyParser, (req, res, next) => {
        
    // })
    .post('/signup', bodyParser, (req, res, next) => {
        const {username, password} = req.body;
        delete req.body.password;

        if (!username || !password) {
            return next({
                code: 400,
                error: 'Valid username and password required'
            });
        };

        userModel
            .find({username})
            .count()
            .then(count => {
                if(count > 0) throw {code: 400, error: `Username ${username} already exists`};
                const user = new userModel(req.body);
                user.generateHash(password);
                return user.save();
            })
            .then(token => {
                res.send({username, token});
            })
            .catch(next);
    })
    .post('/signin', bodyParser, (req, res, next) => {
        const {username, password} = req.body;
        delete req.body.password;

        userModel
            .findOne({username})
            .then(user => {
                if (!user || !user.compareHash(password)) throw {code: 400, error: 'Invalid username or password'};
                return token.sign(user);
            })
            .then(token => {
                res.send({username, token});
            })
            .catch(next);
    });

module.exports = router;