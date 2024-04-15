const express = require('express');
const router = express.Router();

let items = []; 

router.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

router.get('/items', (req, res) => {
    res.json(items);
});

router.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    items[itemId] = updatedItem;
    res.json(updatedItem);
});

router.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    items.splice(itemId, 1);
    res.sendStatus(204);
});

module.exports = router;
