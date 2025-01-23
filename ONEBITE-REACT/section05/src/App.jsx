import './App.css'
import { useState } from "react"

function App() {
  const [state, setState] = useState(0)
  
  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() => setState(state + 1)} // Fixed the arrow function syntax
      >
        + {/* Fixed the misplaced closing tag */}
      </button>
    </>
  )
}

export default App
