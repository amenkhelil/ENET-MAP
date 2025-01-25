import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navabr.jsx'
import Home from './components/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home/>
  </StrictMode>,
)
