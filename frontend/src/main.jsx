// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// ReactDOM.createRoot är en funktion som används för att rendera React-komponenter till DOM-element. I detta fall används den för att rendera rotkomponenten App till det DOM-element med id 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
