import React, { useState } from "react";
import { TextField } from "@mui/material";

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{ mb: 2 }}
        />
    );
};

export default TodoInput;
