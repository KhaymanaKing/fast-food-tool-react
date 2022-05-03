import React from 'react';


export default function OrderInstructionsForm({ 
  instructions, 
  handleInstructionsForm,
  setInstructions,
  instructionsForm  
}) {
  function handleSubmit(e){  
    e.preventDefault();
    instructions.push(instructionsForm);
    setInstructions([...instructions]);
  }


  return (
    <div>OrderInstructionsForm</div>
  );
}
