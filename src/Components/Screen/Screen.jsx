import React from 'react';

class Screen extends React.Component {
  render() {
    return (
      <>
        <span id="screen-value">
            {this.props.value}
        </span>
        {this.props.result}
      </>
    )
  }
}

export default Screen;