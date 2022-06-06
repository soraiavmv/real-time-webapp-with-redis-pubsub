import React from 'react';
import './App.css';
import DonationsCounter from './components/donations-counter';
import DonationsInput from './components/donations-input';


function App() {
  return (
    <div className="App grid place-items-center h-screen">
      <DonationsInput />
      <DonationsCounter />
    </div>
  );
}

export default App;
