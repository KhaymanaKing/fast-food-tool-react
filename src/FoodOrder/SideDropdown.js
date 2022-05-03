import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div>
      Choose your side: <br/>
      <select onChange={(e) => setSideId (e.target.value)}>
        <option value='1'>A letter</option>
        <option value='2'>Leaves from Plant</option>
        <option value='3'>Post Card</option>
      </select>
    </div>
  );
}
