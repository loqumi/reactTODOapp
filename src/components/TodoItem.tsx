import React from "react";
import { Todo } from "types/todo";
import { motion } from "framer-motion";
import { ListItem, ListItemText, Checkbox } from "@mui/material";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            layout
        >
            <ListItem
                onClick={() => toggleTodo(todo.id)}
                sx={{
                    border: '1px solid #ccc',
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "rgba(0, 0, 0, 0.6)" : "inherit",
                    cursor: "pointer",
                }}
            >
                <Checkbox checked={todo.completed} />
                <ListItemText primary={todo.text} />
            </ListItem>
        </motion.div>
    );
};

export default TodoItem;
