import React, { Component } from 'react'

class Space extends Component {
  state = {
    bomb: false,
    detonated: false,
    revealed: false
  };
  
  revealSquare = (event) => {
  
    if (this.props.bomb === true) { 
      this.setState({detonated: true})
      alert('BOOM')
    } else if (this.props.adjacent == 0){
      this.props.revealBlanks(this.props.index)
      this.setState({revealed: true})
    }
    
    else {
      this.setState({revealed: true})

      this.props.revealBlanks(this.props.index)
    }

  }

  render() {
    return ( <div className='space' onClick={this.revealSquare}> { this.state.revealed ? this.props.adjacent : '' } 
      {this.state.detonated ? 'BOOM' : null}</div>
    )
  }
}

export default Space
