import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete, props }) {
    const { text, status } = todo;
    const [updatedText, setUpdatedText] = useState(text);
    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleChange = (e) => {
        const status = e.target.checked ? "complete" : "active";
        onUpdate({ ...todo, status });
    };

    const handleDelete = () => onDelete(todo);

    const handleOpenEdit = () => setIsEditClicked(true);

    const handleEditText = () => setUpdatedText();

    const handleSubmitEdited = () => {
        if (updatedText === null) {
            return;
        }
        isEditClicked(false);
    };

    const handleCancelEdit = () => {
        setUpdatedText("");
        setIsEditClicked(false);
    };

    return (
        <li>
            {isEditClicked === true ? (
                <>
                    <input type="text" value={updatedText} onChange={handleEditText} />
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        name=""
                        id="checkbox"
                        checked={status === "complete"}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox">{text}</label>
                </>
            )}

            {isEditClicked === true ? (
                <>
                    <button type="button" onClick={handleSubmitEdited}>
                        확인
                    </button>
                    <button type="button" onClick={handleCancelEdit}>
                        취소
                    </button>
                </>
            ) : (
                <>
                    <button type="button" onClick={handleOpenEdit}>
                        <FaEdit />
                    </button>
                    <button type="button" onClick={handleDelete}>
                        <FaTrashAlt />
                    </button>
                </>
            )}
        </li>
    );
}
