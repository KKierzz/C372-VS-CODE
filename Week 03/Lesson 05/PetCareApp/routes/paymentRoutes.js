const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.get('/payments/prepare/:serviceId', express.json(), paymentController.preparePayment);
router.get('/payments/prepare', express.json(), paymentController.preparePayment);

module.exports = router;
