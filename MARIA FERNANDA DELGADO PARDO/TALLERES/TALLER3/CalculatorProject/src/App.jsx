import { useState } from 'react';
import './App.css'
import DregreeButtom from './components/Buttom';
import CalculatorCToF from './components/calculatorF/calculator/Data';
import Title from './components/calculatorF/calculator/Title';
import CalculatorFtoC from './components/calculatorC/calculator/data';

function App() {
  const [mood, setMood] = useState("Convert to Celsius");

  const handleClick = ()=>{
      if (mood === "Convert to Celsius"){
          setMood("Convert to Fahrenheit")
      } else {
          setMood("Convert to Celsius")
      }
  }
  return (
    <div className='App'>
      <Title/>
      {
        mood ==="Convert to Celsius" ? <CalculatorFtoC/> :
        <CalculatorCToF />
      }
      <DregreeButtom
        onClick={handleClick}
        nameButton={mood}
      />
      
    </div>
  )
}

export default App;
