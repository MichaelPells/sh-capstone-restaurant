import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <div className="Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
