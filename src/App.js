import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'
import Gameboard from './components/gameboard'
import DifficultyPage from './components/DifficultyPage'
import Header from './components/Header'



const App = () => (
  <div className="app">
        <Route path='/' render={() => (<Header />)} />
        <Route exact path='/easy' render={() => (<Gameboard xGrid={8} yGrid={8} boxSize={70} bombFrequency={1}/>)} />
        <Route exact path='/medium' render={() => (<Gameboard xGrid={16} yGrid={16} boxSize={40} bombFrequency={2} />)} />
        <Route exact path='/hard' render={() => (<Gameboard xGrid={30} yGrid={16} boxSize={32} bombFrequency={2} />)} />
        <Route  path='/' render={() => (<DifficultyPage />)} />
        <Route path='/custom/:xGrid/:yGrid/:boxSize/:bombFrequency' render={({ match }) => (<Gameboard xGrid={match.params.xGrid} yGrid={match.params.yGrid} boxSize={match.params.boxSize} bombFrequency={match.params.bombFrequency} />)} />
  </div>
)

export default App
