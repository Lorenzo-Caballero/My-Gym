import React from 'react';
import Carousel from './Carousel';
import About from '../about/About';
import Contact from '../contact/Contact';
import Banner from './Banner';
import './home.scss';
function Home() {
  return (
    <div>
      <h1>Caballero FIT</h1>

      <Banner/>
      <Carousel/>
      <About/>
      <Contact/>
    </div>
      
  );
}

export default Home;
