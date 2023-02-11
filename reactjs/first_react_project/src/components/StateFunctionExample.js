import React, { useState } from 'react';

function StateFunctionExample() {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button onClick={() => setChange(!change)}>Change Title</button>

      {change ? <h1>Hello World!</h1> : <h1>Welcome Kodego!</h1>}
    </div>
  );
}

export default StateFunctionExample;
