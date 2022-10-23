import React from 'react';
import Buttons from '../Buttons/Buttons';
import Screen from '../Screen/Screen';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: #cfe2f3;
    border-radius: 22px;
    padding: 16px;
    box-shadow: 0px 15px 33px 0px rgba(0,0,0,0.16);
    @media only screen and (max-width: 450px) {
        max-width: 342px;
        background-color: transparent;
        box-shadow: none;
    }
    @media only screen and (max-width: 340px) {
        max-width: 320px;
        background-color: transparent;
        box-shadow: none;
    }
`;

function CalculatorWrapper(props) {
    return (
        <Wrapper>
            <Screen 
                // Show the buttons that were tapped or show `0`
                value={props.calc || '0'} 
                // Show the interim results of the buttons tapped or show nothing
                result={props.result? <span>({props.result})</span> : ''}
            />
            <Buttons 
                updateCalc={props.updateCalc} 
                calculate={props.calculate} 
                deleteLast={props.deleteLast} 
                result={props.result} 
                operators={props.operators}
                finalResult={props.finalResult}
                calc={props.calc}
            />
        </ Wrapper>
    )
}


export default CalculatorWrapper;