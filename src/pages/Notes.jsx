import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        content: "",
        category: "",
    });

    const defaultNotes = [
        {
            id: 1,
            content: "Ask doctor about headache duration",
            category: "General",
            date: "2026-05-02",
            isDefault: true,
        },
        {
            id: 2,
            content: "Check if vitamin supplements are required",
            category: "Health",
            date: "2026-05-02",
            isDefault: true,
        },
    ];

    useEffect(() => {
        const stored = localStorage.getItem("notes");

        if (stored) {
            setNotes(JSON.parse(stored));
        } else {
            setNotes(defaultNotes);
            localStorage.setItem("notes", JSON.stringify(defaultNotes));
        }

        setLoading(false);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();

        const newNote = {
            id: Date.now(),
            content: formData.content,
            category: formData.category,
            date: new Date().toISOString().split("T")[0],
            isDefault: false,
        };

        const updated = [...notes, newNote];

        setNotes(updated);
        localStorage.setItem("notes", JSON.stringify(updated));

        window.dispatchEvent(new Event("notesUpdated"));

        setFormData({
            content: "",
            category: "",
        });
    };

    const handleDelete = (id) => {
        const updated = notes.filter(
            (note) => !(note.id === id && !note.isDefault)
        );

        setNotes(updated);
        localStorage.setItem("notes", JSON.stringify(updated));

        window.dispatchEvent(new Event("notesUpdated"));
    };


    if (loading) return <Loader />;

    return (
        <div className="p-4 sm:p-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <h1 className="text-xl sm:text-2xl font-bold">
                    Notes / Questions
                </h1>


            </div>

            {/* Add Form */}
            <form
                onSubmit={handleAdd}
                className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                <input
                    type="text"
                    name="content"
                    placeholder="Enter your note or question"
                    value={formData.content}
                    onChange={handleChange}
                    className="border p-2 rounded sm:col-span-2"
                    required
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="Health">Health</option>
                    <option value="Medication">Medication</option>
                    <option value="Diet">Diet</option>
                </select>

                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Add Note
                </button>
            </form>

            {/* Notes List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {notes.length === 0 ? (
                    <p className="text-gray-500">No notes available</p>
                ) : (
                    notes.map((note) => (
                        <div
                            key={note.id}
                            className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <p className="font-medium mb-2 wrap-break-word">
                                    {note.content}
                                </p>

                                <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                                    <span>{note.category}</span>
                                    <span>{note.date}</span>
                                </div>
                            </div>

                            {!note.isDefault && (
                                <button
                                    onClick={() => handleDelete(note.id)}
                                    className="text-xs text-red-500 hover:underline mt-2 self-end"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Notes;