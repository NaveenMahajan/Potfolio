import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="hed">
          <h3>Naveen Mahajan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* 2ndcolum */}
        <div className="foot2">
          <h5>Send Email</h5>
          <form action="https://formspree.io/f/mjvdodyb" method="POST">
            <input
              className="input-foot"
              type="Email"
              name="Email"
              autoComplete="off"
              placeholder="Email"
              required
              height="10px"
            />
            <br />
            <br />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        {/* 3rd colum */}
        <div className="foot3">
          <h4>Follow Us</h4>
          <div className="foot-icon">
            <div className="div1">
              <a href="https://discord.com/channels/@me">
                <FaDiscord className="icons" />
              </a>
            </div>
            <div className="div1">
              <a href="https://www.instagram.com/naveenmahajan95/">
                <FaInstagram className="icons" />
              </a>
            </div>
            <div className="div1">
              <a href="https://github.com/">
                <FaGithub className="icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="call">
          <h4>Call Us</h4>
          <h4>+91 9589971714</h4>
        </div>

        <div>
          <hr />
          <div className="cantener-1">
            {new Date().getFullYear()}
            <p> PORTFOLIO . ALL RIGHTS RESERVED</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
      {/* 4th */}
    </footer>
  );
}
export default Footer;
