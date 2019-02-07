import React, { Component } from 'react'
import Space from './space'


class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      xGrid: 4,
      yGrid: 4,
      boxSize: 80,

      bombFrequency: 2,

      boardArray: [],
      playerLost: false,
      playerWon: false
    }
  }
  
  revealSquare = (i, j) => {

    this.setState(prevState => {
      const boardArray = [...prevState.boardArray]

      if (boardArray[i][j].bomb){
        boardArray[i][j].detonated = true
      } else {
        boardArray[i][j].revealed = true
      }

    
      return {...prevState, ...{ boardArray }}
    })

    // checks to see if the player has lost 
    this.state.boardArray[i][j].bomb ? this.setState({playerLost : true}) : null
  
  }

  revealBlanks = () => {
  
    for (let x = 0; x < (this.state.xGrid + this.state.yGrid); x++){
      for (let i = 0; i < this.state.yGrid; i++) {
        for (let j = 0; j < this.state.xGrid; j++) {

          this.setState(prevState => {
            const boardArray = [...prevState.boardArray]
          
            if (boardArray[i][j].adjacent == 0 && boardArray[i][j].revealed) {
              try{boardArray[i - 1][j + 1].revealed = true }catch(error){}
              try{boardArray[i - 1][j].revealed = true }catch(error){}
              try{boardArray[i - 1][j - 1].revealed = true }catch(error){}
              try{boardArray[i + 1][j + 1].revealed = true }catch(error){}
              try{boardArray[i + 1][j].revealed = true }catch(error){}
              try{boardArray[i + 1][j - 1].revealed = true }catch(error){}
              try{boardArray[i][j + 1].revealed = true  }catch(error){}
              try{boardArray[i][j - 1].revealed = true     }catch(error){}        
            }
            return {...prevState, ...{ boardArray }}
          })
        }
      }
    }

    // this.checkForWin()
    
  }
  
    
  
    
  componentWillMount(){
    // builds 2D array and fills with space components, necessary to preform logic 
    
    for (let i = 0; i < this.state.yGrid; i++) {
      this.state.boardArray.push([])

      for (let j = 0; j < this.state.xGrid; j++) {
        let bomb = false
        if (Math.floor(Math.random() * 11) < this.state.bombFrequency) {
          // adjust frequency of bombs by lowering condition 
          bomb = true
        }



        this.state.boardArray[i].push(
          // method for filling array with react components, commenting out to test out regular JS objects
          // <Space key={i.toString() + j.toString()} bomb={bomb} revealBlanks={this.revealBlanks} index={[i,j]} gameOverEvent={this.gameOverEvent} gameActive={this.state.gameActive}/>

          { key: i.toString() + j.toString(), bomb: bomb, index: [i,j], revealed: false }
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
              boardIndex[i][j + 1].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i][j - 1].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i - 1][j].bomb == true) {
              adjSum++
            }}
          catch(error){}

          
          try{
            if (
              boardIndex[i + 1][j].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i + 1][j + 1].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i + 1][j - 1].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i - 1][j + 1].bomb == true) {
              adjSum++
            }}
          catch(error){}

          try{
            if (
              boardIndex[i - 1][j - 1].bomb == true) {
              adjSum++
            }}
          catch(error){}
            
          // code for pushing into flat array
          // this.state.flatBoardArray.push(React.cloneElement( boardIndex[i][j], {adjacent: adjSum} ))

          // code for pushing into 2D array 

          // original line for cloning with adj number
          // this.state.loadedBoard[i].push(React.cloneElement( boardIndex[i][j], {adjacent: adjSum} ))

          this.setState(prevState => {
            const boardArray = [...prevState.boardArray]
            boardArray[i][j].adjacent = adjSum
            return {...prevState, ...{ boardArray }}
          })

        }
      }
    }
    assignNumbers()
  }

  componentWillUpdate(){

   
    // need to write function that checks for wins and losses 
    let playedPieces = 0
    console.log(this.state.xGrid * this.state.yGrid)


 
    this.state.boardArray.forEach(function(subArray, index){
      // for each array I want to use the some method to check to see if any obj 
      // contains the value of detonated 
      subArray.forEach(function(space, spaceIndex){
        if(space.revealed || space.bomb){
          playedPieces++
        }
      })
    })

    if(playedPieces == (this.state.xGrid * this.state.yGrid)) {
      console.log('WINNER WINNER')
    }


    console.log(playedPieces)
    
  }

  render() { 


    const componentBoard = this.state.boardArray.map((row, rowIndex) => {
      return row.map((spaceData, columnIndex) => {
        return <Space key={`${rowIndex}${columnIndex}`} {...spaceData} revealBlanks={this.revealBlanks} revealSquare={this.revealSquare} rowIndex={rowIndex} columnIndex={columnIndex}/>
      } )
    })


      
    return ( 
        
      <div>
        <h1>Minesweeper</h1>
        <div className='gameBoard' 
          style={ 
            {display: 'grid',
              gridTemplateRows: `repeat(${this.state.yGrid}, ${this.state.boxSize}px)`,
              gridTemplateColumns: `repeat(${this.state.xGrid}, ${this.state.boxSize}px)`}}>
  
          {componentBoard}


        </div> 
      </div>
    )
  }
}

 
export default Gameboard