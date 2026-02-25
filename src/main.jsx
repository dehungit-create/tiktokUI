import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </StrictMode>,
)
