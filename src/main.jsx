import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FeatureProvider } from './context/FeatureContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <FeatureProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </FeatureProvider>

)
