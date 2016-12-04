const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const plantModel = require('../models/plant');
const userModel = require('../models/user');
const plantDayModel = require('../models/plant-day');

router
    .get('/', bodyParser, (req, res, next) => {
        const userId = req.user.id;

        Promise.all([
            plantModel
                .find({userId})
                .then(plants => {
                    return plants;
                }),
            userModel
                .findOne({_id: userId})
                .select('username plants')
                .then(user => {
                    return user;
                })
            ])
            .then(([plants, user]) => {
                user.plants = plants;
                res.send(user);
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        const userId = req.user.id;
        const userName = req.user.user;
        const {name,type,waterNeeds,lightNeeds} = req.body;
        
        console.log(req.body);

        plantModel
            .findOne({name})
            .count()
            .then(count => {
                if(count > 0) throw {code: 400, error: `Plant name ${name} already exists`};
                const plant = new plantModel({
                    name: name,
                    type: type,
                    waterNeeds: waterNeeds,
                    lightNeeds: lightNeeds,
                    userId: userId,
                    username: userName
                });
                return plant.save();
            })
            .then(plant => {
                res.send(plant);
            })
            .catch(next);
    });
    // .delete('/', bodyParser, (req, res, next) => {

    // });

module.exports = router;