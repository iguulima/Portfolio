import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Tech from './pages/Tech';
import Projects from './pages/Projects';

import ParticlesComponent from './components/Particle';

// Styles

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ParticlesComponent id="exp-particles" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proj' element={<Projects />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;