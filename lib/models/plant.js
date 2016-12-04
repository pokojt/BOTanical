const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    waterNeeds : {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    username: {
        type: String
    }
});

module.exports = mongoose.model('Plants', plantSchema);