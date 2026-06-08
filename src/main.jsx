import React from 'react'
import ReactDOM from 'react-dom/client'

// Self-hosted fonts (no external CDN request -> protects LCP).
import '@fontsource/orbitron/500.css'
import '@fontsource/orbitron/700.css'
import '@fontsource/orbitron/900.css'
import '@fontsource/chakra-petch/400.css'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/600.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
