import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PrimComponente} from './PrimComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimComponente />
  </StrictMode>,
)
