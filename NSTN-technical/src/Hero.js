import React from 'react';
// import { NavLink } from 'react-router-dom';

function Hero(props) {
  return (
    <>
      <div className="container">
        <div className="Hero-text">
          <h1>{props.name}</h1>
          <p>{props.text}</p>
          <p>{props.acb}</p>
          <p>{props.cc}</p>
          <a
            href="NAVEEN RESUME.. (2023).pdf"
            downlode="NAVEEN RESUME.. (2023).pdf"
          >
            <button className="hero-butt">Resume</button>
          </a>
        </div>
        <div className="Hero-image">
          <picture>
            <img src={props.image} height="200" width="400" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Hero;
