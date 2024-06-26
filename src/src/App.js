import { useState } from "react";
import "./static/styles/common.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const filters = ["all", "active", "complete"];

function App() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <div className="wrap">
            <Header filters={filters} filter={filter} onFilterChange={setFilter} />
            <TodoList filter={filter} />
        </div>
    );
}

export default App;
