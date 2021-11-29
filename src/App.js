/* eslint-disable prettier/prettier */
import React from 'react'

import './App.css'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './views/Home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
