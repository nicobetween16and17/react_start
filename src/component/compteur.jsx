import React, { useState } from 'react';

const Compteur = function() {

  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Compteur: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(0)}>
        0
      </button>
    </>
  );
}
export default Compteur;