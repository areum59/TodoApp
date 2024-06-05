import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { FaCheck } from "react-icons/fa6";

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([
        { id: 123, text: "노동하기", status: "active" },
        { id: 456, text: "공부하기", status: "active" },
    ]);

    const filtered = getFilteredItems(todos, filter);

    const hadndleAdd = (item) => setTodos([...todos, item]);

    const handleUpdate = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    };

    const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

    const handleClearAll = () => {
        setTodos(todos.filter((t) => t.status !== "complete"));
    };

    return (
        <section>
            <AddTodo onAdd={hadndleAdd} />

            <ul>
                {filtered.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>

            <button type="button" onClick={handleClearAll}>
                <FaCheck />
                &ensp;완료 항목 삭제
            </button>
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if (filter === "all") {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}
