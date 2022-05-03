import './App.css';
import { useState } from 'react';

import NameInput from './Name/NameInput';
import DrinkDropDown from './FoodOrder/DrinkDropDown';
import EntreeDropDown from './FoodOrder/EntreeDropDown';
import SideDropDown from './FoodOrder/SideDropdown';

function App() {
  const [orderName, setOrderName] = useState('');
  const [drinkId, setDrinkId] = useState('1');
  const [entreeId, setEntreeId] = useState('1');
  const [sideId, setSideId] = useState('1');
  
  function handleOrderName(e){
    setOrderName(e.target.value);
  }

  return (
    <div className="App">
      Order for {orderName}!
      <NameInput handleOrderName={handleOrderName}/>

    </div>
  );
}

export default App;
