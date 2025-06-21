import "./navbar.css";
import { Link, NavLink } from 'react-router-dom';
export default function Navber({purchase}){
return(
<>
<nav className="navbar">
  <h2><NavLink to="/" className="nav-link" id="main">Mart</NavLink></h2>
  <ul>
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
    <li><NavLink to="/cart" className="nav-link"><span className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></span>{purchase > 0 && <span>{purchase}</span>}</NavLink></li>
    <li><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
    <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
  </ul>
</nav>
</>);
}