import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const customersPath = path.join(__dirname, '../data/customers.json');
const ordersPath = path.join(__dirname, '../data/orders.json');

export const getCustomerOrders = (req, res) => {
    const customerId = req.params.id;
    const orders = JSON.parse(fs.readFileSync(ordersPath));
    const customerOrders = orders.filter(order => order.customerId === customerId);
    res.json(customerOrders);
};
