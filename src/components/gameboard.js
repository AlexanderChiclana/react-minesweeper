import React, { Component } from 'react'
import Space from './space'


class Gameboard extends Component {
    state = { 
      xGrid: 10,
      yGrid: 10,
      boxSize: 80,

      bombFrequency: 3,

      boardArray: [],
      loadedBoard: []    
    }
 

    revealBlanks = (index) => {
        
      // const currentposition = this.state.boardArray[index[0]][index[1]]
      
      // go through each one and check for revealed and 0, reveal the adjacent pieces 

      // for (let i = 0; i < 8; i++) {
      //   for (let j = 0; i < 8; j++) {

      //     if (this.state.loadedBoard[i][j].props.adjacent == 0 // need to find away to see state)
      //   }
      // } 
      console.log('clicked at', index)
      
    }




    render() { 


    // builds 2D array and fills with space components, necessary to preform logic 

      for (let i = 0; i < this.state.yGrid; i++) {
        this.state.boardArray.push([])
        this.state.loadedBoard.push([])

        for (let j = 0; j < this.state.xGrid; j++) {
          let bomb = false
          if (Math.floor(Math.random() * 11) < this.state.bombFrequency) {
            // adjust frequency of bombs by lowering condition 
            bomb = true
          }
          this.state.boardArray[i].push(
            <Space key={i.toString() + j.toString()} bomb={bomb} revealBlanks={this.revealBlanks} index={[i,j]}/>
          )
        }
      }

      // seperate function to assign adjacent Number prop. Needs to iterate through 2d array, and perform logic check to count of adjacent slots with bomb
      
      
      const assignNumbers = () => {

        for (let i = 0; i < this.state.yGrid; i++) {
          for (let j = 0; j < this.state.xGrid; j++) {
            // console.log(i.toString() + j.toString())
            // loops through each index of the 2d array. Need to sum all adjacent slots THEN pass count as prop 
            const boardIndex = this.state.boardArray
            let adjSum = 0
  
            try{
              if (
                boardIndex[i][j + 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i][j - 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i - 1][j].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            
            try{
              if (
                boardIndex[i + 1][j].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i + 1][j + 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i + 1][j - 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i - 1][j + 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
  
            try{
              if (
                boardIndex[i - 1][j - 1].props.bomb == true) {
                adjSum++
              }}
            catch(error){}
              
            // code for pushing into flat array
            // this.state.flatBoardArray.push(React.cloneElement( boardIndex[i][j], {adjacent: adjSum} ))
  
            // code for pushing into 2D array 
            this.state.loadedBoard[i].push(React.cloneElement( boardIndex[i][j], {adjacent: adjSum} ))

          }
        }
      }

      assignNumbers()

      
      return ( 
      
        <div className='gameBoard' 
          style={ 
            {display: 'grid',
              gridTemplateRows: `repeat(${this.state.yGrid}, ${this.state.boxSize}px)`,
              gridTemplateColumns: `repeat(${this.state.xGrid}, ${this.state.boxSize}px)`}}>
   
          {this.state.loadedBoard}


        </div> )
    }
}
 
export default Gameboard