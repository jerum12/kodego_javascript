import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

export default function ReactMemo() {
  // value, function na mag set ng Value na data
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo1', 'todo2']);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <AnotherComponent todos={todos} />
      <hr />
      Count : {count}
      <button onClick={increment}>+</button>
    </div>
  );
}
