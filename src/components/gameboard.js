import React, { Component } from 'react'
import Space from './space'


class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      xGrid: 20,
      yGrid: 15,
      boxSize: 50,

      bombFrequency: 3,

      boardArray: [],
      loadedBoard: [],
      gameActive: true    
    }
  }
    
    
  componentWillMount(){
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

    gameOverEvent = () => {
      console.log('game over')
      this.setState({gameActive: false})
    }


    render() { 


      const loadedBoard = this.state.boardArray.map((row, rowIndex) => {
        return row.map((spaceData, columnIndex) => {
          return <Space key={`${rowIndex}${columnIndex}`} {...spaceData} revealBlanks={this.revealBlanks} />
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
   
            {loadedBoard}


          </div> 
        </div>
      )
    }
}

 
export default Gameboard