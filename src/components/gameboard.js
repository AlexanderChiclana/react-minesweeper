import React, { Component } from 'react'
import Space from './space'

class Gameboard extends Component {
    state = { 
      xGrid: 0,
      yGrid: 0,

      boardArray: []
    }

    // reveal needs to happen at this level? 

    render() { 


      // const boardArray = []
      // for (let i = 0; i < 64; i++) {
      //   let bomb = false
      //   if (Math.floor(Math.random() * 11) > 8 ) {
      //     bomb = true
      //   }

      //   this.state.boardArray.push(
      //     <Space key={i} bomb={bomb}/>
      //   )
      // }

      for (let i = 0; i < 8; i++) {
        this.state.boardArray.push([])
        for (let j = 0; j < 8; j++) {
          let bomb = false
          if (Math.floor(Math.random() * 11) > 8 ) {
            bomb = true
          }
          this.state.boardArray[i].push(
            <Space key={i.toString() + j.toString()} bomb={bomb}/>
          )
        }
      }


      return ( <div className='gameBoard'>

        {this.state.boardArray}

        {/* <Space bomb={true}/> 
        <Space /> 
        <Space bomb={true}/> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space bomb={true}/> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space /> 
        <Space />  */}

      </div> )
    }
}
 
export default Gameboard