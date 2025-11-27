import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="bg-orange-300 text-blue-100">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
