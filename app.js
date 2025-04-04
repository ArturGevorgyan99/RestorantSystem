import express from "express"
import dotenv from 'dotenv';
import menuRoutes from "./routes/menuRoutes.js"
import customerRoutes from "./routes/customerRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

app.listen(PORT, () =>{console.log(`Server is running on port ${PORT}` );
});