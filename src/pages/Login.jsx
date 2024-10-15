import React, { useEffect, useState } from "react";
import { ReactComponent as LoginImg } from '../assets/LoginImg.svg';
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useStateContext } from '../contexts/ContextProvider';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const backendApiUrl = process.env.REACT_APP_BACKEND_API;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let result = emailRegex.test(email);
    return result;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let isValid = true;

    // Validation checks
    if (!email) {
      setEmailError("Please enter your email address");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      isValid = false;
    } else if (password.length < 4) { // Password length check
      setPasswordError("Password must be at least 4 characters");
      isValid = false;
    }

    // Submit only if valid
    if (isValid) {
      const formData = { email, password };

      try {
        const response = await axios.post(`${backendApiUrl}/login`, formData);
        localStorage.setItem('auth', JSON.stringify(response.data.token));
        localStorage.setItem('name', JSON.stringify(response.data.name));
        localStorage.setItem('email', JSON.stringify(response.data.email));
        toast.success("Login successful");
        navigate("/dashboard/search");
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 400) {
          setLoginError("Invalid email or password");
        } else {
          toast.error(err.response?.data?.message || "Login failed");
        }
      }
    } 
  };

  useEffect(() => {
    if (token) {
      toast.success("You are already logged in");
      navigate("/dashboard/search");
    }
  }, [token, navigate]);

  return (
    <div className="login-main">
      <div className="login-left">
        <LoginImg /> 
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo"  />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLoginSubmit}>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
                {passwordError && <p className="error-message">{passwordError}</p>}
              </div>

              {loginError && (
                <div className="login-error-container">
                  <p className="error-message">{loginError}</p>
                </div>
              )}

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember for 30 days</label>
                </div>
                <a href="#" className="forgot-pass-link">Forgot password?</a>
              </div>
              <div className="login-center-buttons">
                <button type="submit" style={{ backgroundColor: currentColor }}>Log In</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
          <div className="back-to-home">  
            <Link to="/" style={{color: currentColor}}>{'\u2190'}Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
