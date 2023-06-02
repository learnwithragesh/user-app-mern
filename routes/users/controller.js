const User = require('./model');

const add = (req, res) => {
    let { firstName, lastName, email } = req.body;
    let user = new User({
        firstName,
        lastName,
        email
    });
    user.save().then((user) => {
        res.status(200).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

const getAll = async (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(400).send(err);
    });
}

module.exports = {
    add,
    getAll
}