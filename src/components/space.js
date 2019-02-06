import React, { Component } from 'react'

class Space extends Component {
  // state = {
  //   bomb: false,
  //   detonated: false,
  //   revealed: false
  // };
  
  revealSquare = () => {
    if (this.props.gameActive) { 
      if (this.props.bomb === true) { 
        this.setState({detonated: true})
        alert('BOOM')
        this.props.gameOverEvent()
  
      } else if (this.props.adjacent == 0){
        this.props.revealBlanks(this.props.index)
        this.setState({revealed: true})
      }
      
      else {
        this.setState({revealed: true})
  
        this.props.revealBlanks(this.props.index)
      }
    } else {
      console.log('game is over kid')
    }
  }

  render() {
    return ( <div className='space' onClick={this.revealSquare}> { this.props.revealed ? this.props.adjacent : '' } 
      {this.props.detonated ? 'BOOM' : null}</div>
    )
  }
}

export default Space
