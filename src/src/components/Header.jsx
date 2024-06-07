import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <header>
            <div className="head-group">
                <ul>
                    {filters.map((value, idx) => (
                        <li key={idx} onClick={() => onFilterChange(value)}>
                            {value}
                        </li>
                    ))}
                </ul>

                {/* 다트모드 추가하기 */}
            </div>

            <div className="app-title">
                <h1>ToDo List</h1>

                <ul className="today">
                    <li>
                        <strong>Tuesday</strong>&ensp;
                    </li>
                    <li>
                        June <span>6</span>,&ensp;
                    </li>
                    <li>2024</li>
                </ul>
            </div>
        </header>
    );
}
