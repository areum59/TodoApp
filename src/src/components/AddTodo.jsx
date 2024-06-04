import React, { useState } from 'react';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

    const onSubmit = () => {
        onAdd({id: '고유한값', text, status: 'active'});
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="" id="" value={text} onChange={handleChange} />
            <button type='button'>Add</button>
        </form>
    );
}