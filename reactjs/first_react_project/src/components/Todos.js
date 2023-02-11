import React, { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([
    { key: '0', title: 'Learn React', completed: false },
    { key: '1', title: 'Learn HTML', completed: false },
    { key: '2', title: 'Learn CSS', completed: true },
    { key: '3', title: 'Learn Javascript', completed: false },
  ]);

  const toggleTodo = (key) => {
    const newTodos = [...todos];
    newTodos[key].completed = !newTodos[key].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My To do List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.key}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'green' : 'red',
            }}
            onClick={() => toggleTodo(todo.key)}
          >
            {' '}
            {todo.title} ----------------------------------{' '}
            <span>{todo.completed ? 'DONE' : 'NOT YET DONE'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
