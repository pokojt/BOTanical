const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantDaySchema = new Schema({
    username: {
        type: String
    },
    name: {
        require: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    temp: {
        type: Number,
        require: true
    },
    light: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('PlantDays', plantDaySchema);