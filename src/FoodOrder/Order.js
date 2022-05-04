import React from 'react';
import './Order.css';

export default function Order({ drinkId, entreeId, sideId }) {
  return (
    <div className='order'>
      <img src ={`entree-${entreeId}.png`}/>
      <img src ={`drink-${drinkId}.png`}/>
      <img src ={`side-${sideId}.png`}/>
    </div>
  );
}
