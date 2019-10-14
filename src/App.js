import React from 'react';
import './App.css';
import CalculatorForm from './components/CalculatorForm'
import Output from './components/Output'

function App() {
  return (
    <div className="App container">
      <h1 className="text-center">Calorie Calculator</h1>
      <p className="text-center">A web app to calculate your calorie needs based on age, height, weight, and exercise.</p>
      <p className="text-center">(This app used the Mifflin-St Jeor Equation for calculations.)</p>
      <br/>
      <CalculatorForm />
      <br/>
      <Output />
    </div>
  );
}

export default App;
