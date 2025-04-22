import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Item from './components/Item';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
