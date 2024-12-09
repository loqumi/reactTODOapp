import React from "react";
import { useTodos } from "hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import { CssBaseline, Container, Typography } from "@mui/material";

const App: React.FC = () => {
    const { todos, addTodo, toggleTodo, clearCompleted, filter, setFilter } = useTodos();

    const activeCount = todos.filter((todo) => !todo.completed).length;
    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ textAlign: "center", pt: 4 }}>
                <Typography variant="h2" gutterBottom>
                    todos
                </Typography>
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} filter={filter} />
                <TodoFooter
                    activeCount={activeCount}
                    completedCount={completedCount}
                    filter={filter}
                    setFilter={setFilter}
                    clearCompleted={clearCompleted}
                />
            </Container>
        </>
    );
};

export default App;
