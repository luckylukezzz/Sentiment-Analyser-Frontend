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
  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const { currentColor } = useStateContext();
  const backendApiUrl = process.env.REACT_APP_BACKEND_API;
  


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

      if(password === confirmPassword){
        const formData = {
          username: name + " " + lastname,
          email,
          password
        };
        try{
        const response = await axios.post(`${backendApiUrl}/register`, formData);
         toast.success("Registration successfull");
         navigate("/login");
       }catch(err){
         toast.error(err.message);
       }
      }else{
        toast.error("Passwords don't match");
      }
    

    }else{
      toast.error("Please fill all inputs");
    }


  }

  useEffect(() => {
    if(token !== ""){
      toast.success("You already logged in");
      navigate("/dashboard/search");
    }
  }, []);

  return (
    <div className="register-main">
      <div className="register-left">
        <RegisterImg/>
      </div>
      <div className="register-right">
        <div className="register-right-container">
          {/* <div className="register-logo">
            <img src={Logo} alt="" />
          </div> */}
          <div className="register-center">
            <br/>
            <br/>
            <h2>Welcome to Analytica!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleRegisterSubmit}>
            <input type="text" placeholder="Name" name="name" required={true} />
            <input type="text" placeholder="Lastname" name="lastname" required={true} />
              <input type="email" placeholder="Email" name="email" required={true} />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required={true} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required={true} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="register-center-buttons">
                <button type="submit" style={{ backgroundColor: currentColor }}>Sign Up</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
