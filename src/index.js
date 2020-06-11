import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Jason Nordheim</h1>
          <Navigation />
        </header>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)