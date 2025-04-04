import express from "express"
import {AddMenuItem, getMenu} from "../controllers/menuController.js";

const router = express.Router();
router.get("/", getMenu);
router.post("/", AddMenuItem);

export default router;