import React from 'react';

export default function Menu({ apiDataMenu }) {
  return (
    <div>
      <ul>
        {apiDataMenu &&
          apiDataMenu.map((anyVariable) => <li key={anyVariable.key}>{anyVariable.menu}</li>)}
      </ul>
    </div>
  );
}
