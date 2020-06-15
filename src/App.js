import React from 'react';
import { Header } from  './Components/Header';
import { DivTable } from  './Components/DivTable';
import { TransactionList } from  './Components/TransactionList';
import { AddTransaction } from  './Components/AddTransaction';

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      
      <div className="container">
        <div className="overlay">
        <Header/>
          
          <DivTable/>
          {/* <Balance/> */}
          <TransactionList/>
          <AddTransaction/>
        </div> 
      </div>     
    </GlobalProvider>
  );
}

export default App;
