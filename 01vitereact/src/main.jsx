import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MYApp(){
  return(
    <div>
      <h1>Custom APP!</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).
render(
    <App />
)
