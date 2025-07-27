import React, { useState } from "react";

function NoteForm({onAdd}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title || !content) return;
        onAdd({ _id: Date.now(), title, content });
        setTitle("");
        setContent("");

    };

    return <div>
    <div className="items-center h-full w-full justify-center flex ">
        <form onSubmit={handleSubmit} className="rounded flex flex-col bg-amber-200 py-5 items-center justify-center w-1/2 shadow space-y-3">
            <input type="text" className="w-1/2  rounded border p-2" placeholder="Title"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea
                    placeholder="Content"
                    className="w-1/2 px-4 py-2 rounded border"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            <button className="border-none bg-blue-600 font-bold w-1/2 p-2 text-white rounded">Add Note</button>
        </form>
    </div>
    </div>
}

export default NoteForm;
