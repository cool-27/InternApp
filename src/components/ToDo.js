import React from "react";
import Check from "@mui/icons-material/Verified";

import Delete from "@mui/icons-material/DeleteForever";
export default function Todo({ todo,handleDelete, handleEdit, toggleComplete, }) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <Check id="it" />
        </button>
        
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <Delete id="it" />
        </button>
      </div>
    </div>
  );
}