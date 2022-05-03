import React from 'react';

export default function EntreeDropDown({ setEntreeId }) {
  return (
    <div> Choose your entrée:<br/>
      <select onChange={(e) => setEntreeId(e.target.value)}>
        <option value='1'>Lettuce</option>
        <option value='2'>Candy Wrapper</option>
        <option value='3'>Half Eaten Toast</option>
      </select>
    </div>
  );
}
