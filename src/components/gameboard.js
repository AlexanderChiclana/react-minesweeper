import React, { Component } from 'react'
import Space from './space'


class Gameboard extends Component {
    state = { 
      xGrid: 0,
      yGrid: 0,

      boardArray: [],
      flatBoardArray: []
    }

    // reveal needs to happen at this level? 

    render() { 


     
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

      // seperate function to assign adjacent Number prop. Needs to iterate through 2d array, and perform logic check to count of adjacent slots with bomb
      
      

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          // console.log(i.toString() + j.toString())
          // loops through each index of the 2d array. Need to sum all adjacent slots THEN pass count as prop 
          const boardIndex = this.state.boardArray
          let adjSum = 0

          try{
            if (
              boardIndex[i][j + 1].props.bomb == true) {
              adjSum++
              // console.log('to the right of ',i.toString() + j.toString() , 'is a bomb')
            }}
          catch(error){}

          try{
            if (
              boardIndex[i][j - 1].props.bomb == true) {
              adjSum++
              // console.log('to the left of ',i.toString() + j.toString() , 'is a bomb')
            }}
          catch(error){}

          try{
            if (
              boardIndex[i - 1][j].props.bomb == true) {
              adjSum++
              // console.log('to the top of ',i.toString() + j.toString() , 'is a bomb')
            }}
          catch(error){}

          
          try{
            if (
              boardIndex[i + 1][j].props.bomb == true) {
              adjSum++
              // console.log('to the bottom of ',i.toString() + j.toString() , 'is a bomb')
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

          this.state.flatBoardArray.push(React.cloneElement( boardIndex[i][j], {adjacent: adjSum} ))

          // need to do this for every adj combo

          

          // console.log(boardIndex[i][j].props.bomb)
        }
      }


      return ( <div className='gameBoard'>

        {this.state.flatBoardArray}

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