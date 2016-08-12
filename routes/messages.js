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

router.patch('/:id', (req, res, next)=> {
    Message.findById(req.params.id, (err, doc)=> {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            })
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            })
        }
        doc.content = req.body.content;
        doc.save((err, result)=> {
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
    })
});

router.delete('/:id', (req, res, next)=> {
    Message.findById(req.params.id, (err, doc)=> {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            })
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            })
        }
        doc.remove((err, result)=> {
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
    })
});
module.exports = router;