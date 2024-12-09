import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "types/todo";
import { Box } from "@mui/material";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    filter: "All" | "Active" | "Completed";
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, filter }) => {
    const filteredTodos = todos.filter((todo) =>
        filter === "All"
            ? true
            : filter === "Active"
                ? !todo.completed
                : todo.completed
    );

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                maxHeight: '300px',
                overflowY: 'auto',
                padding: '0.5rem',
                gap: '0.5rem',
                borderRadius: '4px',
                marginTop: '1rem',
            }}
        >
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </Box>
    );
};

export default TodoList;
