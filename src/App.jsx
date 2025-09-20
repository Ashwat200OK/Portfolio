import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import HeroPage from './Pages/HeroPage'
import { Provider } from 'react-redux'
import store from './Store'
import Skills from './Pages/Skills'

function App() {

  return (
    <Provider store={store}>
      <Navbar/>
      <HeroPage/>
      <Skills/>
    </Provider>
  )
}

export default App
