import React from 'react';

export default function Order({ drinkId, entreeId, sideId }) {
  return (
    <div>
      <img src ={`entree-${entreeId}.jpeg`}/>
      <img src ={`drink-${drinkId}.jpeg`}/>
      <img src ={`side-${sideId}.jpeg`}/>
    </div>
  );
}
