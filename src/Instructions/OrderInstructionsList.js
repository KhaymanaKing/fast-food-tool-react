import React from 'react';
import './Instructions.css';
export default function OrderInstructionsList({ instructions }) {
  return (
    <div>
      <h2>Special Requests</h2>
      <ul className='instructions'>
        <li>
          {
            instructions.map((instruction, i) => <p key={instruction + i}>{instruction}</p>)
          }
        </li>
      </ul>
    </div>
  );
}
