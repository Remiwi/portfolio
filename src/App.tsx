import { useState } from 'react'
import HomePage from './Homepage/HomePage'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>
    </>
  )
}

export default App
