import React from 'react'
// import "../styles/Landing.css";
import { Link } from 'react-router-dom';
import Contact from './Landing/Contact';
import Footer from './Landing/Footer';
import Portfolio from './Landing/Portfolio';
import Services from './Landing/Services';
import Header from './Landing/Header';
import Hero from './Landing/Hero';

const Landing = () => {
    return (
      <div className=" ">
        <Header />
        <Hero />
        <Services />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </div>
    );


  // return (
  //   <div className='landing-main'>
  //   <h1>Landing Page</h1>
  //   <p>Hello and welcome!</p>
  //   <Link to="/login" className="landing-login-button">Login</Link>
  //   <Link to="/register" className="landing-register-button">Register</Link>
  // </div>
  // )
}

export default Landing