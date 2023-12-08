import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './App'

const root = document.getElementById('root')
ReactDOM
  // @ts-expect-error
  .createRoot(root)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
