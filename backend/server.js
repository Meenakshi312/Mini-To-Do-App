import mongoose from "mongoose";
import express from "express";
import notesRouter from "./routes/notes.js"
import dotenv from 'dotenv';
const app=express();
dotenv.config();
const PORT = process.env.PORT || 5000 || 'https://mini-to-do-app-ysni.vercel.app/';
const DATABASE_URl = process.env.DATABASE_URl || "mongodb://localhost:27017/test"

app.get('/', (req,res)=>{
    res.send('hello world');
})
app.use(express.json());
app.use("/api/notes",notesRouter);

mongoose.connect(DATABASE_URl).then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT,()=>
        console.log(`Server running on port ${PORT}`));
    }).catch((err)=>console.log("DB error:",err));
