import Note from "../models/Note.js";

export const getNotes=async(req,res)=>{
    const notes=await Note.find();
    res.json(notes);
};

export const addNote=async(req,res) => {
    const{title,content}=req.body;
    const note=new Note({title,content});
    await note.save();
    res.json(note);
    
};

export const deleteNote=async(req,res)=> {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:"Note deleted"});
};