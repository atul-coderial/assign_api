const express = require('express');
// Router
const router = express.Router();

// Result Controller
const resultController = require('../controllers/result_controller');


router.post('/create',  resultController.addResult);

// Find Result List
router.get('/resultList', resultController.findResulList);

// Delete Result By ID
router.get('/deleteResult/:id', resultController.deleteResult);

// Find Result By ID
router.get('/editFindResult/:id', resultController.editFindResult);

// Update Result By ID
router.post('/editResult', resultController.updateResult)

module.exports = router;