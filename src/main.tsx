import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Topbar from './component/Topbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Topbar/>
    <App />
  </StrictMode>,
)
