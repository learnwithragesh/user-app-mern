const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        match:[/^[A-Za-z ]+$/]
    },
    lastName: {
        type: String,
        required: true,
        match: [/^[A-Za-z ]+$/]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    }
});
const model = mongoose.model('users', schema);
module.exports = model;