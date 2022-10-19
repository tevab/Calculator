import React from 'react';

function Button(props) {
    const handleClick = () => {
        if (props.calculate) {
            props.calculate();
        } else if (props.deleteLast) {
            props.deleteLast();
        } else {
            props.updateCalc(props.text);
        };
    };

    return (
        <button onClick={handleClick}>{props.displayText? props.displayText : props.text}</button>
    );
  }

export default Button;