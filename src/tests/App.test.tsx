import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Добавление задачи", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(screen.getByText("New Task")).toBeInTheDocument();
});
