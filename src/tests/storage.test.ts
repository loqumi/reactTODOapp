import { TodoStorage } from "../utils/storage";

test("TodoStorage корректно сохраняет данные", () => {
    const mockTodos = [{ id: 1, text: "Test", completed: false }];
    
    TodoStorage.set(mockTodos);
    expect(localStorage.getItem("todos")).toBe(JSON.stringify(mockTodos));
    
    const data = TodoStorage.get();
    expect(data).toEqual(mockTodos);
});