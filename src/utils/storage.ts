export const TodoStorage = {
    get: (): Todo[] => {
        try {
            return JSON.parse(localStorage.getItem("todos") || "[]");
        } catch {
            return [];
        }
    },
    set: (todos: Todo[]) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
};