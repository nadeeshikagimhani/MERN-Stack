// 1
import express from 'express' //const express = require("express")

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

import path from 'path';

import cors from 'cors';

//acces for .env file
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

//1
const app = express();

// middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin: "http://localhost:5173",
      }
    ));
}

app.use(express.json());
app.use(rateLimiter);

//use for routes
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

//connect db
connectDB().then(() => {
// 1 Start the server and wait for requests
    app.listen(PORT, ()=> {
        console.log('Server started on PORT:', PORT)
    });
});




