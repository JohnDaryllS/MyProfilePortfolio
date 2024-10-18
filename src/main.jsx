import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './nav.jsx'
import Header from './card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation/>,
    <Header/>
  </StrictMode>,
)
