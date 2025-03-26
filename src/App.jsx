import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Tech from './components/Tech';

// Pages
import Home from './pages/Home';

// Styles
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed-background"></div>
    </div>
  );
}

export default App;