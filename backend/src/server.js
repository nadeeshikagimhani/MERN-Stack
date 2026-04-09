// 1
import express from 'express' //const express = require("express")

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

//acces for .env file
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5001;

//1
const app = express();

// middleware
app.use(express.json());
app.use(rateLimiter);


//use for routes
app.use("/api/notes", notesRoutes)

//connect db
connectDB().then(() => {
// 1 Start the server and wait for requests
    app.listen(PORT, ()=> {
        console.log('Server started on PORT:', PORT)
    });
});




