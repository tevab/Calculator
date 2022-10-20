import React from 'react';

function Button(props) {
    const handleClick = () => {
        // If the button has a `calculate` prop run this funtion
        if (props.calculate) {
            props.calculate();
        // If the button has a `deleteLast` props run this function
        } else if (props.deleteLast) {
            props.deleteLast();
        // Otherwise update the screen with the buttons tapped
        } else {
            props.updateCalc(props.text);
        };
    };

    return (
        <button onClick={handleClick}>
            {/* If the button's text is `*` replace it with `X` */}
            {props.text === '*' ? 'X' : props.text}
        </button>
    );
  }

export default Button;