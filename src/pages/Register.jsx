import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Register.css";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useStateContext } from '../contexts/ContextProvider';
import { ReactComponent as RegisterImg } from '../assets/RegisterImg.svg';


const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();
  const [ token] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const { currentColor } = useStateContext();
  const backendApiUrl = process.env.REACT_APP_BACKEND_API;
  
  // State variables to hold input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables to hold error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let result = emailRegex.test(email);
    return result;
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setLastnameError("");
    setConfirmPasswordError("");

    let isValid = true;

    // Validation checks
    if (!name) {
      setNameError("Please enter your name");
      isValid = false;
    }

    if (!lastname) {
      setLastnameError("Please enter your lastname");
      isValid = false;
    }

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

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    // Submit only if valid
    if (isValid) {
      const formData = { username: name + " " + lastname, email, password };

      try {
        const response = await axios.post(`${backendApiUrl}/register`, formData);
        toast.success("Registration successful");
        navigate("/login");
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 400) {
          toast.error("Registration failed: " + err.response.data.message);
        } else {
          toast.error("Registration failed");
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
    
  //   let name = e.target.name.value;
  //   let lastname = e.target.lastname.value;
  //   let email = e.target.email.value;
  //   let password = e.target.password.value;
  //   let confirmPassword = e.target.confirmPassword.value;

  //   if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

  //     if(password === confirmPassword){
  //       const formData = {
  //         username: name + " " + lastname,
  //         email,
  //         password
  //       };
  //       try{
  //       const response = await axios.post(`${backendApiUrl}/register`, formData);
  //        toast.success("Registration successfull");
  //        navigate("/login");
  //      }catch(err){
  //        toast.error(err.message);
  //      }
  //     }else{
  //       toast.error("Passwords don't match");
  //     }
    

  //   }else{
  //     toast.error("Please fill all inputs");
  //   }

  // const handleRegisterSubmit = async (e) => {
  //   e.preventDefault();
  //   let name = e.target.name.value;
  //   let lastname = e.target.lastname.value;
  //   let email = e.target.email.value;
  //   let password = e.target.password.value;
  //   let confirmPassword = e.target.confirmPassword.value;

  //   if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

  //     if(password === confirmPassword){
  //       const formData = {
  //         username: name + " " + lastname,
  //         email,
  //         password
  //       };
  //       try{
  //       const response = await axios.post(`${backendApiUrl}/register`, formData);
  //        toast.success("Registration successfull");
  //        navigate("/login");
  //      }catch(err){
  //        toast.error(err.message);
  //      }
  //     }else{
  //       toast.error("Passwords don't match");
  //     }
    

  //   }else{
  //     toast.error("Please fill all inputs");
  //   }


  // }

  // useEffect(() => {
  //   if(token !== ""){
  //     toast.success("You already logged in");
  //     navigate("/dashboard/search");
  //   }
  // }, []);

  return (
    <div className="register-main">
      <div className="register-left">
        <RegisterImg/>
      </div>
      <div className="register-right">
        <div className="register-right-container">
        <div className="register-logo">
            <img src={Logo} alt="Logo"  />
          </div>
          <div className="register-center">
            <h2>Welcome to Analytica!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleRegisterSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                {lastnameError && <p className="error-message">{lastnameError}</p>}
              </div>
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
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
                {confirmPasswordError && (
                  <p className="error-message">{confirmPasswordError}</p>
                )}
              </div>
              <div className="register-center-buttons">
                <button type="submit" style={{ backgroundColor: currentColor }}>Sign Up</button>
                <button type="button">
                  <img src={GoogleSvg} alt="Google" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="back-to-home">
            <Link to="/" style={{color: currentColor}}>{'\u2190'}Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;