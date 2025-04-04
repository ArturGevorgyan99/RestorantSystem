import express from 'express';
import {getCustomerOrders} from '../controllers/customerController.js';
import {customerValidation} from '../middlewares/authMiddleware.js';
import {SetCustomer} from '../controllers/customerController.js'

const router = express.Router();
router.post("/",customerValidation,SetCustomer);
router.get('/:id/orders',getCustomerOrders);

export default router;
