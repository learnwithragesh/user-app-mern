'use strict';
const router = require('express').Router();
const controller = require('./controller');

// router to add answers to database
router.post('/add', controller.add);
// router to get all users
router.get('/', controller.getAll);

module.exports = router;