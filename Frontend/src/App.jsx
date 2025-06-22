
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from "./pages/Cart.jsx";
import {Provider} from "react-redux";
import Store from "./app/store.js";
import Signup from './pages/signup/signup.jsx';
import Login from './pages/login/login.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <>
    <Provider store={Store}>
    <ToastContainer position="top-center" autoClose={3000} />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App
