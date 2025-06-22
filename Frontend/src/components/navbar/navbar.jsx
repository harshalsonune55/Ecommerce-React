import "./navbar.css";
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/store/storeSlice";
import { toast } from "react-toastify";
export default function Navber({purchase}){

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    toast.success("logout successfully");
    dispatch(logoutUser());
  };


return(
<>
<nav className="navbar">
      <h2><NavLink to="/" className="nav-link" id="main">Mart</NavLink></h2>
      <ul>
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        <li>
          <NavLink to="/cart" className="nav-link">
            <span className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></span>
            {purchase > 0 && <span>{purchase}</span>}
          </NavLink>
        </li>

        {!user ? (
          <>
            <li><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
            <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
          </>
        ) : (
          <>
            <li><span className="nav-link">Hi, {user.username || "User"}</span></li>
            <li><span className="nav-link"><NavLink to="/dashboard"><i class="fa-solid fa-user"></i></NavLink></span></li>
            <li><button onClick={handleLogout} className="nav-link logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
</>);
}