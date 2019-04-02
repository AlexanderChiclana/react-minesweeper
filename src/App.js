import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'
import Gameboard from './components/gameboard'
import DifficultyPage from './components/DifficultyPage'



const App = () => (
  <div>
        <Route exact path='/' render={() => (<DifficultyPage />)} />

        <Route exact path='/easy' render={() => (<Gameboard xGrid={8} yGrid={8} boxSize={70} bombFrequency={2}/>)} />
        <Route exact path='/medium' render={() => (<Gameboard xGrid={16} yGrid={16} boxSize={50} bombFrequency={2} />)} />
        <Route exact path='/hard' render={() => (<Gameboard xGrid={30} yGrid={16} boxSize={32} bombFrequency={2} />)} />

        <Route path='/custom/:xGrid/:yGrid/:boxSize/:bombFrequency' render={({ match }) => (<Gameboard xGrid={match.params.xGrid} yGrid={match.params.yGrid} boxSize={match.params.boxSize} bombFrequency={match.params.bombFrequency} />)} />


  </div>
)

export default App
