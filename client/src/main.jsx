import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// ngrok config add-authtoken 2tXjVWzANVO6f3a8Vi5XJxEUKFv_yfrGxmgvmjcRinchx6VD
