import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the item being edited

  const addTodo = (todo) => {
    if (editIndex === -1) {
      // If not in edit mode, add a new todo
      const newTodo = {
        id: Math.random(),
        todo: todo,
      };
      setList([...list, newTodo]);
    } else {
      // If in edit mode, update the existing todo
      const newList = list.map((item, index) => {
        if (index === editIndex) {
          return { ...item, todo: todo };
        }
        return item;
      });
      setList(newList);
      setEditIndex(-1); // Exit edit mode
    }

    // clear input box
    setInput("");
  };

  const editTodo = (index, todo) => {
    // Set the input value to the todo being edited
    setInput(todo);
    setEditIndex(index); // Set the index of the item being edited
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>
        {editIndex === -1 ? "Add" : "Update"}{" "}
        {/* Change button text based on state */}
      </button>
      <ul>
        {list.map((todo, index) => (
          <li key={todo.id}>
            {editIndex === index ? ( // Render input in edit mode
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            ) : (
              <span>{todo.todo}</span> // Render todo in view mode
            )}
            {editIndex === index ? ( // Render "Cancel" button in edit mode
              <button onClick={() => setEditIndex(-1)}>Cancel</button>
            ) : (
              <button onClick={() => editTodo(index, todo.todo)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
