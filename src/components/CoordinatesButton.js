import React from 'react'

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default CoordinatesButton
