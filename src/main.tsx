import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App/App'
import 'App/index.scss'
import { StoreProvider } from 'App/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
         <StoreProvider>
               <App />
         </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>,
)  
