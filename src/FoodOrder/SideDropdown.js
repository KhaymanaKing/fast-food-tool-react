import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div>
      <select onChange={(e) => setSideId (e.target.value)}>
        <option value='1'>Mud</option>
        <option value='2'>Leaves from Plant</option>
        <option value='3'>Post Card</option>
      </select>
    </div>
  );
}
