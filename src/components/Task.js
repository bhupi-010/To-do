import React, { useState } from "react";


const Task = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = todos.find((tod) => tod.text === todo);
    if (check) {
      alert("Task already exists");
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
      };

      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const todo = todos.find((todo) => todo.id === id);
    setTodos(updatedTodos);
    setTodo(todo.text);
  };

  return (
    <div className="task">
     
      <div className="formm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">add task</button>
        </form>
        <h1>To-Do List</h1>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h6>{todo.text}</h6>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
          <button onClick={() => editTodo(todo.id)}>edit</button>
        </div>
      ))}
    </div>
  );
};
export default Task;
