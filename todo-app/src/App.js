import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
    const [newTodo, setNewTodo] = useState(""); // useState returns an array with two elements, the first is the value of the state, the second is a function to update the state

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Hello World",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Hello Universe",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Hello Galaxy",
            isCompleted: true,
        },
    ]);

    // toggle the isCompleted state
    const toggleDone = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.isCompleted = !todo.isCompleted;
        setTodos(newTodos);
    };

    // handleChange function
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    // addTodo function
    const addTodo = (e) => {
        e.preventDefault();
        const newTodos = [...todos];
        newTodos.push({
            id: todos.length + 1,
            text: newTodo,
            isCompleted: false,
        });
        setTodos(newTodos);
        setNewTodo("");
    };

    return (
        <div className="bg-blue-700 h-screen flex justify-center items-center">
            <div className="w-[350px] h-[600px] bg-white rounded-2xl shadow-md space-y-5 relative pt-16 pb-5">
                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <div className="px-5 pb-5 flex flex-col max-h-full space-y-5">
                    {/* Header */}
                    <form className="flex space-x-5" onSubmit={addTodo}>
                        <input
                            type="text"
                            placeholder="Add new task"
                            className="w-full h-10 px-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent flex-1"
                            onChange={handleChange}
                            value={newTodo}
                        />

                        <button type="submit" className="h-10 rounded-full bg-blue-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5">
                            Add
                        </button>
                    </form>

                    {/* List */}
                    <div className="space-y-8 overflow-y-auto flex-1">
                        {todos.map((todo) => (
                            <Card key={todo.id} todo={todo} onClick={() => toggleDone(todo.id)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
