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
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleInstructionsForm (e.target.value)}/>
        <button>Add Special Request</button>
      </form>
    </div>
  );
}
