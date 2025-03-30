import express from 'express';
import { getCustomerOrders } from '../controllers/customerController.js';

const router = express.Router();

router.get('/:id/orders', getCustomerOrders);

export default router;
