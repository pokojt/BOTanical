const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const plantDayModel = require('../models/plant-day');
const userModel = require('../models/user');

router
    .get('/:id', bodyParser, (req, res, next) => {
        //const {name} = req.body;
        const name = req.params.id;
        plantDayEntry
            .find({name})
            .then(plantEntries => {
                res.send(plantEntries);
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        const {name,date,temp,light,username} = req.body;
        // const userName = req.user.user;

        const plantDayEntry = new plantDayModel({
            username: username,
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