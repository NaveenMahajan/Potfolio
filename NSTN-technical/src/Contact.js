import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="contact-h2">Contact Us</h2>
      <iframe
        className="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.953378897114!2d81.62729877932577!3d21.275365328632525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e75a04f5afc7%3A0x3d1469ee49a9e596!2sShivanand%20Nagar%20Sub%20Station!5e0!3m2!1sen!2sin!4v1678892102774!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <div className="contaner">
        <form
          action="https://formspree.io/f/mrgvljll"
          method="post"
          className="contact-form"
        >
          <input
            type="text"
            name="username"
            placeholder="UserName"
            autoComplete="off"
            required
          />
          <input
            type="Email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Message"
            autoComplete="off"
            required
          />
          <input className="submit" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
