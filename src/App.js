import React from 'react';
import AddTodo from './TodoInput';
import Todos from './assets/Todo';

function App() {
  return (
    <div>
      <h1>Redux Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;