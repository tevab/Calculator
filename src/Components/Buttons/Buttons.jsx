import React from 'react';
import Button from '../Button/Button';

function Buttons(props) {

  const operators = props.operators;

  const getDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <Button key={i} text={i} updateCalc={props.updateCalc} />
      )
    };
    return digits;
  };

  return (
    <div>
      <Button text='=' calculate={props.calculate}/> 
      <Button text={props.result === '' ? 'Clear' : 'Delete'} deleteLast={props.deleteLast}/>
      {operators.map((operator, i) => (<Button key={i} text={operator} updateCalc={props.updateCalc} />))}
      {getDigits()}
    </div>
  );
}

export default Buttons;