import React, { Component } from 'react'

class Space extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#7fe7cc'
    } 
  }
 


  localReveal = () => {
    this.props.revealSquare(this.props.rowIndex, this.props.columnIndex)

    this.props.revealBlanks()
  }
  

  render() {
    let value = this.props.adjacent
    let backgroundColor = '#52de97'
    let color = 'black'

    if (this.props.revealed){
      backgroundColor = 'white'
    }

    switch(this.props.adjacent){
    case 0: 
      value = ''
      break
    case 1:
      color = 'blue'
      break
    case 2: 
      color = 'green'
      break
    case 3:
      color = 'purple'
      break
    case 4:
      color = 'black'
      break
    case 5:
      color = 'brown'
      break
    case 6:
      color = 'cyan'
      break
    case 7:
      color = 'black'
      break
    case 8: 
      color = 'gray'
      break
    default:
      color = 'black'
    }

    return ( 
    
    
    <div className='space' onClick={this.localReveal} style={{background: backgroundColor, color: color, fontSize: this.props.boxSize/2}}> 
     
      <div>{this.props.revealed ? value : '' } </div>
      
      <div style={{	opacity: 1, animation: 'spin 4s linear infinite, fadeinout 1s linear infinite forwards'}}>
        {this.props.bomb && this.props.playerLost && '💥' }
      </div>

    </div>
    )
  }
}

export default Space
