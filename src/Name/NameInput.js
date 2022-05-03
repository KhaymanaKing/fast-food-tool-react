import React from 'react';

export default function NameInput({ handleOrderName }) {
  return (
    <div>
        Name for the order?
      <input onChange={handleOrderName}/>
    </div>
  );
}
