const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const plantDayModel = require('../models/plant-day');
const userModel = require('../models/user');

router
    .get('/', bodyParser, (req, res, next) => {
        const {name} = req.body;

        plantDayEntry
            .find({name})
            .then(plantEntries => {
                res.send(plantEntries);
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        const {name,date,temp,light} = req.body;
        const userName = req.user.user;
        
        const plantDayEntry = new plantDayModel({
            username: userName,
            name: name,
            date: date,
            temp: temp,
            light: light
        });
        plantDayEntry
            .save()
            .then(plantEntry => {
                res.send(plantEntry);
            })
            .catch(next);
    });

module.exports = router;