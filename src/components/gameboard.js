import React, { Component } from 'react'
import Space from './space'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      boardArray: [],
      playerLost: false,
      playerWon: false
    }
  }
  
  revealSquare = (i, j) => {

    this.setState(prevState => {
      const boardArray = [...prevState.boardArray]
      if (!prevState.playerLost){
        // condition if game is still active, detonates / reveals 
        if (boardArray[i][j].bomb){
          boardArray[i][j].detonated = true
        } else {
          boardArray[i][j].revealed = true
        }
  
        return {...prevState, ...{ boardArray }}
      }else{
        console.log('its ovah')
      }
    })

    // checks to see if the player has lost 
    this.state.boardArray[i][j].bomb ? this.setState({playerLost : true}) : null
  
  }

  revealBlanks = () => {
  
    for (let x = 0; x < (this.props.xGrid + this.props.yGrid); x++){
      for (let i = 0; i < this.props.yGrid; i++) {
        for (let j = 0; j < this.props.xGrid; j++) {

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
  
  clearBoard = () => {
    this.setState({  
      boardArray: [],
      playerLost: false,
      playerWon: false
    })
  }

  buildBoard = () => {
   for (let i = 0; i < this.props.yGrid; i++) {
    this.state.boardArray.push([])
   }
  }

  fillBoard = () => {
  //  this.clearBoard()

   // builds 2D array and fills with space components, necessary to preform logic 

   for (let i = 0; i < this.props.yGrid; i++) {
    // this.state.boardArray.push([])


    for (let j = 0; j < this.props.xGrid; j++) {
      let bomb = false
      if (Math.floor(Math.random() * 11) < this.props.bombFrequency) {
        // adjust frequency of bombs by lowering condition 
        bomb = true
      }

      this.state.boardArray[i].push(
        { key: i.toString() + j.toString(), bomb: bomb, index: [i,j], revealed: false, adjacent: 0 }
      )
    }
  }
  // assigns adjacent Number prop. Needs to iterate through 2d array, and perform logic check to count of adjacent slots with bomb
    for (let i = 0; i < this.props.yGrid; i++) {
      for (let j = 0; j < this.props.xGrid; j++) {
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

        this.setState(prevState => {
          const boardArray = [...prevState.boardArray]
          boardArray[i][j].adjacent = adjSum
          return {...prevState, ...{ boardArray }}
        })
       }
     }
   }
    
  resetGame = () => {
    // this.clearBoard()
    // this.buildBoard()
    // this.fillBoard()
  }

  componentWillMount(){
  //  this.setState({
  //   xGrid: 6,
  //   yGrid: 6,
  //   boxSize: 70,
  //   bombFrequency: 2,
  //  })
   this.buildBoard()
   this.fillBoard()
  }

  componentWillUpdate(){

   
    // need to write function that checks for wins and losses 
    let playedPieces = 0
    console.log(this.props.xGrid * this.props.yGrid)


 
    this.state.boardArray.forEach(function(subArray, index){
      // for each array I want to use the some method to check to see if any obj 
      // contains the value of detonated 
      subArray.forEach(function(space, spaceIndex){
        if(space.revealed || space.bomb){
          playedPieces++
        }
      
      })
    })

    if(playedPieces == (this.props.xGrid * this.props.yGrid)) {
      console.log('WINNER WINNER')
      alert('YOU HAVE WON')
    }


    console.log(playedPieces)
    
  }

  
  componentDidUpdate(prevProps, prevState) {
    // this.state.playerLost ? alert('bro its over') : null
  }
  
 

  render() { 


    const componentBoard = this.state.boardArray.map((row, rowIndex) => {
      return row.map((spaceData, columnIndex) => {
        return <Space key={`${rowIndex}${columnIndex}`} {...spaceData} playerLost={this.state.playerLost} revealBlanks={this.revealBlanks} revealSquare={this.revealSquare} rowIndex={rowIndex} columnIndex={columnIndex} boxSize={this.props.boxSize}/>
      } )
    })


      
    return ( 
        
      <div>
        {/* <h1>Minesweeper</h1> */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            xl={12}
            alignItems="center"
            alignContent="center"
          >

            

        <div className='gameBoard' 
          style={ 
          {display: 'grid',
              gridTemplateRows: `repeat(${this.props.yGrid}, ${this.props.boxSize}px)`,
              gridTemplateColumns: `repeat(${this.props.xGrid}, ${this.props.boxSize}px)`}}>
  
          {componentBoard}

        </div> 
        {/* <Button variant="contained" color="primary" onClick={this.resetGame}>
           Reset Game
         </Button> */}
                   </Grid>
                   </Grid>

      </div>
    )
  }
}

 
export default Gameboard