import React from 'react'
import Contact from './Landing/Contact';
import Footer from './Landing/Footer';
// import Portfolio from './Landing/Portfolio';
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


}

export default Landing