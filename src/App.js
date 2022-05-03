import './App.css';
import { useState } from 'react';

import NameInput from './Name/NameInput';

function App() {
  const [orderName, setOrderName] = useState('');
  
  
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
