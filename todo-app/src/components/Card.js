import React from "react";

function Card({ todo, onClick }) {
    const { id, text, isCompleted } = todo;
    return (
        <div onClick={() => onClick(id)} className="flex items-center space-x-5 my-5 cursor-pointer">
            <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-white ${isCompleted ? "block" : "hidden"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 13l4 4L19 7l-2-2-9 9-4-4-2 2z" clipRule="evenodd" />
                </svg>
            </div>
            <p className={`text-gray-400 ${isCompleted ? "line-through" : ""}`}>{text}</p>
        </div>
    );
}

export default Card;
