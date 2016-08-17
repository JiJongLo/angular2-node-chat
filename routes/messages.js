/**
 * Created by boyu on 12-Aug-16.
 */
const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next)=> {
    Message.find()
        .populate('user', 'firstName')
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


router.use('/?', (req,res,next)=>{

    jwt.verify(req.query.token, 'secret', (err, decoded)=>{
        if(err){
            if (err) {
                return res.status(404).json({
                    title: 'Authorization failed',
                    error: err
                })
            }
        }
        next();
    })
});
router.post('/', (req, res, next)=> {
    const decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, (err, doc)=>{
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            })
        }
        const message = new Message({
            content: req.body.content,
            user : doc
        });
        message.save((err, result)=> {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                })
            }
           doc.messages.push(result);
           doc.save(); 
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        })
  });
});




router.patch('/:id', (req, res, next)=> {
    const decoded = jwt.decode(req.query.token);
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
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {message: 'Message created by other user'}
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
    const decoded = jwt.decode(req.query.token);
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
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {message: 'Message created by other user'}
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