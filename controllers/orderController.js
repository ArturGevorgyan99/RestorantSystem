import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const menuPath = path.join(__dirname, "../data/menu.json");
const orderPath = path.join(__dirname, "../data/orders.json");

let totalPrice = 0;

export  const placeOrder = (req,res) => {
    const menu = JSON.parse(fs.readFileSync(menuPath));
    const orders = JSON.parse(fs.readFileSync(orderPath));
    const {customerId, items} = req.body;
    for( let item of items){
        const menuItem = menu.find(m => m.id === item.menuId)
        if(!menuItem){
            return res.status(400).json({error: `Menu item with id ${item.menuId} not found. `})
        }
        totalPrice += item.quantity * menuItem.price;
    }
    const order = {
        id: `O${orders.length +1}`,
        customerId,
        items,
        totalPrice,
        date: Date.now().toString()
    };
    orders.push(order);
    fs.writeFileSync(orderPath,JSON.stringify(orders, null, 2));
    res.status(201).json({message: "Order placed",order})
};