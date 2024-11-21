import { useState } from "react";

// Tipe data untuk Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-52">
      <h2 className="text-2xl font-bold mb-4 text-center">To-Do List</h2>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Tambah tugas..."
        />
      </div>
      <button
        onClick={addTodo}
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Tambah Tugas
      </button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "bg-green-100 line-through" : "bg-white"
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="cursor-pointer flex-1"
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
