import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Products from './Products'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Products/>
    <About/>
 </>
  )
}

export default App
