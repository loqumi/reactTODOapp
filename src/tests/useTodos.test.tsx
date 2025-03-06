import { renderHook, act } from "@testing-library/react-hooks";
import { useTodos } from "../hooks/useTodos";
import { TodoStorage } from "../utils/storage";

jest.mock("../utils/storage");

test("addTodo добавляет новую задачу", () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
        result.current.addTodo("New Task");
    });

    expect(result.current.todos[0].text).toBe("New Task");
    expect(TodoStorage.set).toHaveBeenCalled();
});