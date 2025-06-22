import "./login.css";
import Navber from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/store/storeSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
export default function Login(){

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const dispatch = useDispatch();
      const navigate = useNavigate();
      const { user, error, loading } = useSelector(state => state.auth);


  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };


  useEffect(() => {
    if (user) {
      navigate("/"); 
    }
  }, [ user,navigate]);



    return (<>
<Navber/>
<div className="login-container">
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p style={{ color: "green" }}>Logging in...</p>}

      <input {...register("username", { required: true })} placeholder="Username" />
      {errors.username && <span>Username is required</span>}

      <input type="password" {...register("password", { required: true })} placeholder="Password" />
      {errors.password && <span>Password is required</span>}

      <button type="submit" disabled={loading}>Login</button>
      <p>Didn't have a account? make you one <NavLink to="/signup">signup</NavLink></p>
    </form>
  </div>
<Footer/>
    </>);
}