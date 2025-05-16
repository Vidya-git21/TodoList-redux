import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./assets/todoSlice";

function TodoInput({ isEditing = false, editText = "", onSave, onCancel }) {
  const [text, setText] = useState(editText || "");
  const dispatch = useDispatch();

  useEffect(() => {
    setText(editText);
  }, [editText]);

  const handleSubmit = () => {
    if (text.trim()) {
      if (isEditing && onSave) {
        onSave(text);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={isEditing ? "Edit todo" : "Add a todo"}
      />
      <button onClick={handleSubmit}>{isEditing ? "Save" : "Add"}</button>
      {isEditing && <button onClick={onCancel}>Cancel</button>}
    </div>
  );
}

export default TodoInput;
