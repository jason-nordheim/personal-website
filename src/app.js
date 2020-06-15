import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { color } from './colors'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

import Navigation from './components/Navigation'
import Header from './components/Header'

const APP_STYLES = {
    display: 'flex', 
    flexDirection: 'column', 
    paddingTop: '2rem', 
    color: color.text, 
    backgroundColor: color.background, 
    height: '100vh', 
    width: '100vw', 
    textAlign: 'center'
}


const MAIN_STYLES = {
    marginTop: '1rem',
    paddingTop: '1rem',  
    display: 'flex', 
    justifyContent: 'center',
}
const App = () => {

  return (
    <Router>
      <div style={APP_STYLES} className="App">
        <Header /> 
        <main style={MAIN_STYLES}>
            <Route exact path="/" >
                <Home /> 
            </Route>
            <Route path="/about">
                <About /> 
            </Route>
            <Route path="/experience" >
                <Experience /> 
            </Route>
            <Route path="/projects"> 
                <Projects /> 
            </Route>
        </main>
      </div>
    </Router>
  )
}

export default App