import { useState } from 'react'
import './App.css'
import BasicConcepts from './components/BasicConceptos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Router</h1>
      <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">Documentation</a>
      <hr />

      <BasicConcepts />
    </div>
  )
}

export default App
