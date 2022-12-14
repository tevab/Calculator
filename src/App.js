import React, { useState, useEffect } from 'react';
import GlobalStyle from './Theme/globalStyle';
import CalculatorWrapper from './Components/CalculatorWrapper/CalculatorWrapper';

function App() {
  // Update the value screen on buttons tap
  const [calc, setCalc] = useState('');
  // Update the result screen on buttons tap
  const [result, setResult] = useState('');
  // Set state to finalResult if the user tapped the `=` button
  const [finalResult, setFinalResult] = useState(false);

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    // If the last value is an operator or if the result on the screen is final - don't do anything
    if (
      (operators.includes(value) && calc === '') || (operators.includes(value) && operators.includes(calc.slice(-1))) || (finalResult)
      ) {
      return;
    };
    // Add commands from the buttons tapped
    setCalc(calc + value);

    // If the last value wasn't an operator - calculate the commands on the screen
    if (!operators.includes(value)) {
      setResult(eval(calc + value));
    };
  };

  // Show the final result on the scree and remove the interim results
  const calculate = () => {
    try {
      setCalc(eval(calc));
      setResult('');
      setFinalResult(true);
    }
    catch {
      console.log(`Can't process command`);
    }
  };

  const deleteLast = () => {
    // If the screen value is empty - do nothing
    if (calc === '') {
      return;
    // If the interim results are empty - that means its the final results are being displayed, and if you hit the button it will reset the screen
    } else if (result === '') {
      setCalc('');
      setResult('');
      setFinalResult(false);
    // If none of the above is true - delete last character and update the screen values
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
      setResult(value);
    }
  };

  // Replace all `*` with `X`
  useEffect(() => {
    let screenValue = document.getElementById('screen-value').innerHTML;
    document.getElementById('screen-value').innerHTML = screenValue.replaceAll(
      '*', `<span style="font-size: 18px; vertical-align: middle; font-weight: 500;">X</span>`
    );
  });

  return (
    <div className="App">
      <GlobalStyle />
      <CalculatorWrapper 
        calc={calc}
        updateCalc={updateCalc} 
        calculate={calculate} 
        deleteLast={deleteLast} 
        result={result} 
        operators={operators}
        finalResult={finalResult}
      />
    </div>
  );
};

export default App;
