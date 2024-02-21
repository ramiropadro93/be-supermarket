const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController'); // Adjust the path to your controller file

router.post('/items/createItem', itemsController.createItem);
router.get('/items', itemsController.getItems);
router.get('/items/:id', itemsController.getItemById);
router.put('/items/update/:id', itemsController.updateItem);
router.delete('/items/delete/:id', itemsController.deleteItem);

module.exports = router;
