import React from 'react';

export default function Todo({todo}) {
    const {text, status} = todo;

    return (
        <li>
            <input type="checkbox" name="" id="checkbox" value={status} />
            <label htmlFor="checkbox">{text}</label>

            <button type='button'>수정</button>
            <button type='button'>삭제</button>
        </li>
    );
}