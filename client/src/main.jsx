import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Regi from './components/Regi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Regi></Regi> */}
  </StrictMode>,
)
