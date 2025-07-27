import mongoose from "mongoose";
import express from "express";
import notesRouter from "./routes/notes.js"

const app=express();
const PORT=5000;

app.use(express.json());
app.use("/api/notes",notesRouter);

mongoose.connect("mongodb+srv://Meenakshi:kd9UoGtWC5RXcF7c@cluster0.w1rnzg4.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT,()=>
        console.log(`Server running on port ${PORT}`));
    }).catch((err)=>console.log("DB error:",err));
