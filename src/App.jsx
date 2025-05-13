import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Navigation from './Component/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <Navigation/>

   </div>
  )
}

export default App
