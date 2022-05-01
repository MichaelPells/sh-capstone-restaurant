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
          <Route path="/sh-capstone-restaurant/" element={<Home />} />
          <Route path="/sh-capstone-restaurant/products" element={<Products />} />
          <Route path="/sh-capstone-restaurant/about" element={<About />} />
          <Route path="/sh-capstone-restaurant/contact" element={<Contact />} /> 
        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
