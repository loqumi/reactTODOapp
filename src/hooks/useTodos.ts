import { Todo } from "types/todo";
import { useState, useEffect } from "react";

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos(prev => [newTodo, ...prev]); // Используем предыдущее состояние
    };
    
    const toggleTodo = (id: number) => {
        setTodos(prev => prev.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    };

    return { todos, addTodo, toggleTodo, clearCompleted, filter, setFilter };
};
