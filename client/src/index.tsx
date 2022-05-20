import React from 'react'
import ReactDOM from 'react-dom'
import './app/layout/styles.css'
import App from './app/layout/App'

// React.StrictMode just tells us if we're doing something against best practices
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
