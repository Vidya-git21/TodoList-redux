import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos.list);
  const dispatch = useDispatch();

  // Local state to track which todo is being edited
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
    }
    setEditingId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />

          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleEditSave(todo.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
            </>
          )}

          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
