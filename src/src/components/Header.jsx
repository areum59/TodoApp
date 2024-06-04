import React from 'react';

export default function Header() {
    return (
        <header>
            <ul className='btn-group'>
                <li><button type='button'>all</button></li>
                <li><button type='button'>active</button></li>
                <li><button type='button'>compleate</button></li>
            </ul>

            {/* <div className="app-title">
                <h1>ToDo List</h1>

                <ul className="today">
                    <li><strong>Tuesday</strong></li>
                    <li>June <span>6</span>,</li>
                    <li>2024</li>
                </ul>
            </div> */}
        </header>
    );
}