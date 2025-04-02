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
export const SetCustomer = (req,res) =>  {
    const { name, email ,phone} = req.body;
    const customers = JSON.parse(fs.readFileSync(customersPath));
    let id = `C${customers.length+1}`;
    customers.push({ id, name, email, phone });
        fs.writeFileSync(customersPath, JSON.stringify(customers, null, 2));
        res.status(201).json({message: "customers item added."});
}
