import React from 'react';

export default function DrinkDropDown({ setDrinkId }) {
  return (
    <div>
      Choose your drink: <br/>
      <select onChange={(e) => setDrinkId(e.target.value)}>
        <option value='1'>Water</option>
        <option value='2'>Mud</option>
        <option value='3'>Gallon of Paint</option>
      </select>
    </div>
  );
}
