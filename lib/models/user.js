const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username : {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    plants: [],
    roles: []
});

userSchema.methods.generateHash = function(password) {
    return this.password = bcrypt.hashSync(password, 8);
};

userSchema.methods.compareHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Users', userSchema);