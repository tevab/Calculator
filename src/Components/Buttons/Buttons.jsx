import React from 'react';
import Button from '../Button/Button';

function Buttons(props) {

  // Get operators array from App.js
  const operators = props.operators;

  const getDigits = () => {
    // Create an empty array for digits
    const digits = [];
    // create 10 buttons with value from 0 to 10
    for (let i = 0; i < 10; i++) {
      digits.push(
        <Button key={i} text={i} updateCalc={props.updateCalc} />
      )
    };
    return digits;
  };

  return (
    <div>
      {/* Calculate button */}
      <Button text='=' calculate={props.calculate}/> 
      {/* Delete button */}
      <Button
        // If the interim results are empty show `Clear`, otherwise show `Delete`
        text={props.result === '' ? 'Clear' : 'Delete'} 
        deleteLast={props.deleteLast}
      />
      {/* Create a button for each operator */}
      {operators.map((operator, i) => (<Button key={i} text={operator} updateCalc={props.updateCalc} />))}
      {/* Display digit buttons */}
      {getDigits()}
    </div>
  );
}

export default Buttons;