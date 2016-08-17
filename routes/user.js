/**
 * Created by boyu on 12-Aug-16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
router.get('/', function (req, res, next) {
    res.render('index')
});

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save((err, result)=> {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred in Mongo',
                error: err
            })
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        })
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({
        email: req.body.email
    }, function (err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred in Mongo',
                error: err
            })
        }
        if (!result) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            })
        }
        if (!passwordHash.verify(req.body.password, result.password)) {
            return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid password'}
            })
        }
        var token = jwt.sign({user: result}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: result._id
        })

    });

});

module.exports = router;
