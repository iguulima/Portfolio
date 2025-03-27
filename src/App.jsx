import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Tech from './pages/Tech';


// Styles
import './App.css';
import Experience from './components/Experience';

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
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;