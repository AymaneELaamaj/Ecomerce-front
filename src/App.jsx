import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Navigation from './Component/Navigation/Navigation'
import HeroSection from './Component/Herosection/HeroSection';
import FeaturedProducts from './Component/FeaturedProducts/FeaturedProducts';
import Footer from './Component/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <Navigation/>
    <main className="flex-grow-1">
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />


   </div>
  )
}

export default App
