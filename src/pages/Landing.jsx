import React from 'react'
// import "../styles/Landing.css";
import { Link } from 'react-router-dom';
import Contact from './Landing/Contact';
import Footer from './Landing/Footer';
import Portfolio from './Landing/Portfolio';
import Services from './Landing/Services';
import Header from './Landing/Header';
import Hero from './Landing/Hero';
import DashboardImage from './Landing/DashboardImage';

const Landing = () => {
    return (
      <div className="bg-white">
      <Header />
      <Hero />
      <Services className="my-0" />
      <DashboardImage  className="my-0" />
      <Contact className="my-0" />
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