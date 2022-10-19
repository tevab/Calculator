import { useState } from "react";
import Buttons from "./Components/Buttons/Buttons";
import Screen from "./Components/Screen/Screen";

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [finalResult, setFinalResult] = useState(false);

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      (operators.includes(value) && calc === '') || (operators.includes(value) && operators.includes(calc.slice(-1))) || (finalResult)
      ) {
      return;
    };
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value));
    };
  };

  const calculate = () => {
    setCalc(eval(calc));
    setResult('');
    setFinalResult(true);
  };

  const deleteLast = () => {
    if (calc === '') {
      return;
    } else if (result === '') {
      setCalc('');
      setResult('');
      setFinalResult(false);
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
      setResult(value);
    }
  };

  return (
    <div className="App">
      <Screen value={calc || '0'} result={result? <span>({result})</span> : ''}/>
      <Buttons updateCalc={updateCalc} calculate={calculate} deleteLast={deleteLast} result={result} operators={operators}/>
    </div>
  );
};

export default App;
