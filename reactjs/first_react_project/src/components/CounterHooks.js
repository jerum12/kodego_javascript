import React, { useState } from 'react';

export default function CounterHooks() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');

  const increment = () => {
    console.log('avc');
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}
