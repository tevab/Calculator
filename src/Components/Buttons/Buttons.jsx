import React from 'react';
import Button from '../Button/Button';

function Buttons(props) {

  const getDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button key={i} text={i} updateCalc={props.updateCalc} />
      )
    };
    return digits;
  };

  return (
    <div>
      <Button text='+' updateCalc={props.updateCalc}/>
      <Button text='-' updateCalc={props.updateCalc}/>
      <Button text='*' updateCalc={props.updateCalc} displayText='X'/>
      <Button text='/' updateCalc={props.updateCalc}/>
      <Button text='.' updateCalc={props.updateCalc}/>
      <Button text='=' calculate={props.calculate}/>
      <Button text={props.result == '' ? 'Clear' : 'Delete'} deleteLast={props.deleteLast}/>
      <Button text='0' updateCalc={props.updateCalc}/>
      {getDigits()}
    </div>
  );
}

export default Buttons;