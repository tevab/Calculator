import React from 'react';
import Button from '../Button/Button';

function Buttons() {

  const getDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button key={i} text={i} />
      )
    };
    return digits;
  };

  return (
    <div>
      <Button text="+"/>
      <Button text="-"/>
      <Button text="x"/>
      <Button text="/"/>
      <Button text="="/>
      <Button text="DEL"/>
      <Button text="0"/>
      {getDigits()}
    </div>
  );
}

export default Buttons;