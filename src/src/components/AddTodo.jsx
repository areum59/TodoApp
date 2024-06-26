import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        onAdd({ id: uuidv4(), text, status: "active" });
        setText("");
    };

    return (
        <form onSubmit={onSubmit} className="add-todo">
            <input type="text" value={text} onChange={handleChange} placeholder="Add Todo..." />
            <button type="submit">Add</button>
        </form>
    );
}
