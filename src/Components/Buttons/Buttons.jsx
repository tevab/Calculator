import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  gap: 10px;
`;

const OperatorsWrapper = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 340px) {
   gap: 2px;
  }
`;

const DigitsWrapper = styled.div`
  display: flex;
  align-cntent: space-around;
  justify-content: flex-start;
  gap: 13px;
  flex-wrap: wrap;
  @media only screen and (max-width: 450px) {
    align-content: space-around;
    justify-content: space-between;
    gap: 10px;
    &:after {
      content: '';
      flex: auto;
    }
  }
  @media only screen and (max-width: 340px) {
    column-gap: 2px;
   }
`;

const MainButtonswrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 450px) {
    display: flex;
    align-content: space-around;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  @media only screen and (max-width: 340px) {
    gap: 6px;
   }
`;

function Buttons(props) {

  // Get operators array from App.js
  const operators = props.operators;

  const getDigits = () => {
    // Create an empty array for digits
    const digits = [];
    // create 10 buttons with value from 0 to 10
    for (let i = 0; i < 10; i++) {
      digits.push(
        <Button key={i} text={i} updateCalc={props.updateCalc} finalResult={props.finalResult} digit />
      )
    };
    return digits;
  };

  return (
    <Wrapper>
      {/* Create a button for each operator */}
      <OperatorsWrapper id="operators">
        {operators.map((operator, i) => (
          <Button 
            key={i} 
            text={operator} 
            updateCalc={props.updateCalc} 
            finalResult={props.finalResult}
            result={props.result}
          />))}
      </OperatorsWrapper>
      <MainButtonswrapper>
        {/* Display digit buttons */}
        <DigitsWrapper>
          {getDigits()}
        </DigitsWrapper>
        <div style={{
          display: 'flex',
          alignContent: 'space-around',
          justifyContent: 'space-between',
          flexDirection: 'column',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          {/* Calculate button */}
          <Button text='=' 
            calculate={props.calculate} 
            finalResult={props.finalResult}
            result={props.result}
          /> 
          {/* Delete button */}
          <Button
            // If the interim results are empty show `C`, otherwise show `DEL`
            text={props.result === '' ? 'C' : 'DEL'} 
            deleteLast={props.deleteLast}
            // If the calculator doesnt show interim results but still not showing a final result disable the button
            disabledClear={!props.result && !props.finalResult ? true : false}
          />
        </div>
      </MainButtonswrapper>
    </Wrapper>
  );
}

export default Buttons;