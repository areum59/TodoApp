import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
    const { text, status } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    // 체크박스의 checked 상태에 따른 상태 업데이트
    const handleChange = (e) => {
        const status = e.target.checked ? "complete" : "active";
        onUpdate({ ...todo, status });
    };

    // Todo 삭제
    const handleDelete = () => onDelete(todo);

    // 수정 버튼 클릭 시 '확인/취소' 버튼 토글
    const handleOpenEdit = () => setIsEditing(true);

    // Todo text 수정
    const handleSave = () => {
        onEdit({ ...todo, text: editText });
        setIsEditing(false);
    };

    // Todo 수정 취소 > 기본 버튼 노출
    const handleCancelEdit = () => setIsEditing(false);

    return (
        <li className="todo-item">
            {isEditing ? (
                <div className="inp-group">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                </div>
            ) : (
                <div className="inp-group">
                    <input
                        type="checkbox"
                        name=""
                        id="checkbox"
                        checked={status === "complete"}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox">{text}</label>
                </div>
            )}

            {isEditing ? (
                <div className="btn-group">
                    <button type="button" onClick={handleSave}>
                        <IoMdCheckmark />
                    </button>
                    <button type="button" onClick={handleCancelEdit}>
                        <IoMdClose />
                    </button>
                </div>
            ) : (
                <div className="btn-group">
                    <button type="button" onClick={handleOpenEdit}>
                        <FaEdit />
                    </button>
                    <button type="button" onClick={handleDelete}>
                        <FaTrashAlt />
                    </button>
                </div>
            )}
        </li>
    );
}
