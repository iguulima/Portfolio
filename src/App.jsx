import { useState } from 'react'

//Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Tech from './components/Tech';

// Styles
import reactLogo from './assets/icons/react.svg'
import './App.css'
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <div class="fixed-background"></div>
        <HeroSection />
        {/* <Tech/> */}
        <Projects/>
      </div>
    </>
  )
}

export default App
