
import "./signup.css";
import Navber from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, resetAuthState } from "../../features/store/storeSlice";
import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 

export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("passwordMismatch", {
        message: "Passwords do not match!",
      });
      return;
    }

    dispatch(
      signupUser({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    );
  };

  const navigate = useNavigate(); 

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  }, [success, navigate]);


  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return (
    <>
      <Navber />
      <div className="signup-container">
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <h2 style={{ textAlign: "center" }}>Signup</h2>

          {loading && <div style={{ textAlign: "center", color: "green" }}>Signing up...</div>}
          {success && <div style={{ textAlign: "center", color: "green" }}>Signup successful!</div>}
          {error && <div style={{ textAlign: "center", color: "red" }}>{error}</div>}
          {errors.passwordMismatch && (
            <div style={{ textAlign: "center", color: "red" }}>
              {errors.passwordMismatch.message}
            </div>
          )}

          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          {errors.username && <span>Username is required</span>}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <span>Email is required</span>}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && <span>Password is required</span>}

          <input
            type="password"
            {...register("confirmPassword", { required: true })}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span>Confirm password is required</span>}

          <button type="submit" disabled={loading}>Sign Up</button>
          <p>or else Already have an account? <NavLink to="/login">Login</NavLink></p>
        </form>
      </div>
      <Footer />
    </>
  );
}
