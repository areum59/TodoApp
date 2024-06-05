import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
    return (
        <header>
            <ul className="btn-group">
                {filters.map((value, idx) => (
                    <li key={idx}>
                        <button type="button" onClick={() => onFilterChange(value)}>
                            {value}
                        </button>
                    </li>
                ))}
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
