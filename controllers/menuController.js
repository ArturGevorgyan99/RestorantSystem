import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const menuPath = path.join (__dirname, "../data/menu.json");

export const getMenu = (req,res ) => {
    const menu = JSON.parse(fs.readFileSync(menuPath));
    res.json(menu);
}

export const AddMenuItem = (req,res) => {
    const {id, name, price, ingredients} = req.body;
    if(!id || !name || !price || !ingredients){
        return res.status(400).json({error: "All fields are required"})
    }
    const menu = JSON.parse(fs.readFileSync(menuPath));
    menu.push({ id, name, price, ingredients });
    fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2));
    res.status(201).json({message: "Menu item added."});
}