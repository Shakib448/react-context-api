import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext } from 'react';

export const CategoryContext = createContext();


function App() {

  const [count, setCount] = useState('laptop');

  return (
    <CategoryContext.Provider value={[count, setCount]} >
      <p> count value {count} </p>
      <Header/>
      <Home />
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
