import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders correctly", () => {
    render(<TodoList />);
    expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Tambah tugas.../i);
    const button = screen.getByText(/Tambah Tugas/i);

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  test("toggles todo completion", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Tambah tugas.../i);
    const button = screen.getByText(/Tambah Tugas/i);

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(button);

    const todoItem = screen.getByText("Learn Testing").closest("li");
    expect(todoItem).not.toHaveClass("line-through");

    fireEvent.click(screen.getByText("Learn Testing"));

    await waitFor(() => expect(todoItem).toHaveClass("line-through"));
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Tambah tugas.../i);
    const button = screen.getByText(/Tambah Tugas/i);

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(button);

    const deleteButton = screen.getByText(/Hapus/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn Testing")).toBeNull();
  });
});
