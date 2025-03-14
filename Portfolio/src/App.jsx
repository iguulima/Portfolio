import { useState } from 'react'

//Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Styles
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <HeroSection />
      </div>
    </>
  )
}

export default App
