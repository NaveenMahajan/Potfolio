import React from 'react';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
function Home() {
  const data = {
    name: 'I,m Naveen Mahajan',
    image: 'img3.jpg',
    text: 'This is my official Portfolio website to showcase',
    acb: ' My all related to frontend development',
  };
  return (
    <div className="home">
      <Hero {...data} />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
