import React from 'react';
import './App.css';
import CalculatorForm from './components/CalculatorForm'
import Header from './components/Header'

function App() {
  return (
    <div className="App container">
      <br/>
      <Header />
      <br/>
      <CalculatorForm />
    </div>
  );
}

export default App;
