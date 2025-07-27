import React from "react";

export default function NoteList({ notes, onDelete }) {
    return (
        <div className="space-y-4">
            {/* Show message if notes are empty */}
            {notes.length === 0 && (
                <p className="text-gray-500 text-center">No notes available.</p>
            )}

            {/* Show notes if any */}
            {notes.length > 0 &&
                notes.map((note) => (
                    <div
                        key={note._id}
                        className="bg-white rounded shadow p-4 flex justify-between items-center"
                    >
                        <span>{note.title}: {note.content}</span>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            onClick={() => onDelete(note._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
        </div>
    );
}
