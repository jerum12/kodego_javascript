import React, { memo } from 'react';

function AnotherComponent({ todos }) {
  console.log('another component here.....');
  return (
    <div>
      <h2>Another Component</h2>
      {todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
    </div>
  );
}

export default memo(AnotherComponent);
