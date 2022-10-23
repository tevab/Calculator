import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.digit ? '#0e1f40' : '#504561'};
    color: #f1f1f1;
    font-family: 'Ubuntu', Arial;
    font-weight: 700;
    font-size: 20px;
    border: 0;
    border-radius: ${props => props.digit ? '50%' : '22px'};
    padding: 16px;
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    transition: 400ms all ease-in-out;
    flex-grow: ${props => props.text === '=' ? 1 : 0};
    position: relative;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.digit ? '#0a152b' : '#3c3449'};
    }
    &:disabled {
        opacity: 0.7;
    }
    @media only screen and (max-width: 450px) {
        width: 60px;
        height: 60px;
    }
`;

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
        <StyledButton 
            onClick={handleClick} 
            digit={props.digit} 
            text={props.text} 
            disabled={props.finalResult || props.result === '' || props.disabledClear ? true : false}
        >
            {/* If the button's text is `*` replace it with `X` */}
            {props.text === '*' ? 'X' : props.text}
        </StyledButton>
    );
  }

export default Button;