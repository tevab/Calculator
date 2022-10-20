import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f1f1f1;
    border-radius: 12px;
    padding: 16px;
    font-size: 16px;
    margin-bottom: 16px;
`;

class Screen extends React.Component {
  render() {
    return (
      <Wrapper>
        <span id="screen-value" style={{
            fontSize: 28,
            marginRight: 6,
        }}>
            {this.props.value}
        </span>
        {this.props.result}
      </ Wrapper>
    )
  }
}

export default Screen;