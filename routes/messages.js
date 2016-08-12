/**
 * Created by boyu on 12-Aug-16.
 */
const express = require('express');
const router = express.Router();
const Message = require('../models/message');
router.post('/', (req, res, next)=> {
    const message = new Message({
        content: req.body.content
    });
    message.save((err, result)=> {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            })
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    })
});
router.get('/', (req, res, next)=> {
    Message.find()
        .exec((err, docs)=> {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        })
});


module.exports = router;