const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/items', apiController.getAllItems);
router.get('/items/:id', apiController.getItemById);
router.post('/items', apiController.createItem);
router.put('/items/:id', apiController.updateItem);
router.delete('/items/:id', apiController.deleteItem);

module.exports = router;
