
import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import router from './routes/product.routes.js';
const app = express();


app.use(router)
app.listen(5000,()=>{
    connectDB();
    console.log('Server started at http://localhost:5000');
})