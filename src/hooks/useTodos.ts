import { Todo } from "types/todo";
import { useState, useEffect } from "react";
import { TodoStorage } from "../utils/storage";

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => TodoStorage.get());

    useEffect(() => {
        TodoStorage.set(todos);
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
