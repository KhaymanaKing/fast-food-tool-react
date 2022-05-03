import './App.css';
import { useState } from 'react';

import NameInput from './Name/NameInput';
import DrinkDropDown from './FoodOrder/DrinkDropDown';
import EntreeDropDown from './FoodOrder/EntreeDropDown';
import SideDropDown from './FoodOrder/SideDropdown';
import Order from './FoodOrder/Order';
import OrderInstructionsForm from './Instructions/OrderInstructionsForm'
import OrderInstructionList from './Instructions/OrderInstructionsList'
function App() {
  const [orderName, setOrderName] = useState('');
  const [drinkId, setDrinkId] = useState('1');
  const [entreeId, setEntreeId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [instructions, setInstructions] = useState('');
  const [instructionsForm, setInstructionsForm] = useState('');
  function handleOrderName(e){
    setOrderName(e.target.value);
  }

  function handleInstructionsForm(instructions){
    setInstructionsForm(instructions);
  }

  return (
    <div className="App">
      Order for {orderName}!
      <NameInput handleOrderName={handleOrderName}/>
      
      <Order drinkId={drinkId} entreeId={entreeId} sideId={sideId}/>
      <OrderInstructionsForm 
        instructions={instructions} 
        handleInstructionsForm={handleInstructionsForm}
        setInstructions={setInstructions}
        instructionsForm={instructionsForm}/>


      <section className='dropdowns'>
        <EntreeDropDown setEntreeId={setEntreeId}/>
        <DrinkDropDown setDrinkId={setDrinkId}/>
        <SideDropDown setSideId={setSideId}/>

      </section>
    </div>
  );
}

export default App;
