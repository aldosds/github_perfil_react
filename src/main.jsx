import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { PI as numeroPi, GTM_BRASIL } from './teste.js'
import nomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Utilizando as variáveis */}
    {GTM_BRASIL} <br />
    {nomes.length} <br />
    {numeroPi}
    <App />
  </React.StrictMode>,
)
