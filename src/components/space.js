import React, { Component } from 'react'

class Space extends Component {
  state = {
    bomb: false,
    adjacent: 0,
    revealed: false
  };
  
  revealSquare = (event) => {
    this.setState({revealed: true})
    console.log(event.target)

    this.props.bomb ? alert('bomb') : null
  }

  render() {
    return ( <div className='space' onClick={this.revealSquare}> { this.state.revealed ? this.props.adjacent : 'SPACE' }</div>
    )
  }
}

export default Space
