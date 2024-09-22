const express = require('express');

const router = express.Router();
const categoryController = require('../Controller/CategoryController');


router.get('/getAllCategory',categoryController.getAll);
router.get('/get/:id',categoryController.singleData);
router.post('/create',categoryController.createCategory);
router.put('/update/:id',categoryController.updateCategory);
router.delete('/del/:id',categoryController.deleteCategory);

module. exports = router ;