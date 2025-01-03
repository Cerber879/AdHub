import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.css'
import App from './App/App'

import { ApolloClientProvider } from './providers/ApolloClientProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ApolloClientProvider>
      <App />
    </ApolloClientProvider>
  </React.StrictMode>
)
