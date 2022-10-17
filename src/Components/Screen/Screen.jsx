import React from 'react';

class Screen extends React.Component {
  render() {
    return (
      <>
        {this.props.value}
        {this.props.result}
      </>
    )
  }
}

export default Screen;