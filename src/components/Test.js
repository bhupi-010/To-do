import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../actions/index";

const Test = () => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todoReducer.list);
  const data = useSelector((state) => state.todoReducer.data);

  if (edit) {
    setText(data);
    setEdit(false);
  }
  const handleAdd = () => {
    dispatch(addTodo(text));

    setText("");
  };
  return (
    <div className="task">
      <Header />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>add task</button>

      <h1>To-Do List</h1>

      {lists.map((list) => {
        const handleDelete = () => {
          dispatch(deleteTodo(list.id));
        };
        const handleEdit = () => {
          dispatch(editTodo(list));
          setEdit(true);
        };
        return (
          <div key={list.id}>
            <h4>{list.data}</h4>

            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default Test;
