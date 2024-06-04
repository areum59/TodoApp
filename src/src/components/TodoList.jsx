import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: 123, text: '노동하기', status: 'active'},
        {id: 456, text: '공부하기', status: 'active'}
    ]);

    const hadndleAdd = (item) => setTodos([...todos, item]);

    return (
        <section>
            <AddTodo onAdd={hadndleAdd} />

            <ul>
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} />                    
                ))}
            </ul>

            <button type='button'>완료 항목 삭제</button>
        </section>
    );
}