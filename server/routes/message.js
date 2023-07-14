const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// GET all messages
router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a message
router.post('/', async function(req, res, next) {
    const { name, email, message } = req.body;
    const newMessage = new Message({
        name,
        email,
        message,
    });
    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
});

// DELETE a message

router.delete('/:id', async function(req, res, next) {
    const { id } = req.params;
    try {
        const deletedMessage = await Message.findByIdAndDelete(id);
        res.status(200).json(deletedMessage);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
});

//Delete all messages

router.delete('/', async function(req, res, next) {
    try {
        const deletedMessages = await Message.deleteMany();
        res.status(200).json(deletedMessages);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
});



module.exports = router;
