import React from 'react';
import Hero from './Hero';
function About() {
  const data = {
    name: 'About My Profile',
    image: 'img.jpg',
    text: 'Hello. i am Naveen. i am a hard-working engineering',
    acb: ' graduated specialised in computer science Engineering',
    cc: ' with an over all CGPA:-7.8 ',
  };
  return (
    <div className="about">
      <Hero {...data} />
    </div>
  );
}

export default About;
