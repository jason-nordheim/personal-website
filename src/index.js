import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Jason Nordheim</h1>
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